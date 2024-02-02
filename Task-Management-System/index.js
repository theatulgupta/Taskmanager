// Import required modules
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cron = require('node-cron');

// Import models
const Task = require('./models/task');
const SubTask = require('./models/subtask');
const User = require('./models/user');

// Create Express app
const app = express();

// Define API endpoints
app.post('/create-task', authenticateToken, async (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = new Task({ title, description, dueDate, userId: req.user.id });
  await task.save();
  res.sendStatus(201);
});

app.post('/create-sub-task', authenticateToken, async (req, res) => {
  const { taskId } = req.body;
  const subTask = new SubTask({ taskId });
  await subTask.save();
  res.sendStatus(201);
});

app.get('/get-user-tasks', authenticateToken, async (req, res) => {
  const { priority, dueDate, page } = req.query;
  const tasks = await Task.find({ userId: req.user.id, priority, dueDate })
    .skip((page - 1) * 10)
    .limit(10);
  res.json(tasks);
});

app.get('/get-user-sub-tasks', authenticateToken, async (req, res) => {
  const { taskId } = req.query;
  const subTasks = await SubTask.find({ taskId });
  res.json(subTasks);
});

app.put('/update-task/:id', authenticateToken, async (req, res) => {
  const { dueDate, status } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { dueDate, status }
  );
  await SubTask.updateMany({ taskId: task._id }, { status });
  res.sendStatus(200);
});

app.put('/update-sub-task/:id', authenticateToken, async (req, res) => {
  const { status } = req.body;
  await SubTask.findOneAndUpdate({ _id: req.params.id }, { status });
  res.sendStatus(200);
});

app.delete('/delete-task/:id', authenticateToken, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { deletedAt: new Date() }
  );
  await SubTask.updateMany({ taskId: task._id }, { deletedAt: new Date() });
  res.sendStatus(204);
});

app.delete('/delete-sub-task/:id', authenticateToken, async (req, res) => {
  await SubTask.findOneAndUpdate({ _id: req.params.id }, { deletedAt: new Date() });
  res.sendStatus(204);
});

// Define cron jobs
cron.schedule('0 0 * * *', async () => {
  const tasks = await Task.find({ deletedAt: null }).sort({ dueDate: 1 });
  let priority = 0;
  let prevDueDate = null;
  for (const task of tasks) {
    if (task.dueDate !== prevDueDate) {
      priority++;
      prevDueDate = task.dueDate;
    }
    await Task.updateOne({ _id: task._id }, { priority });
  }
});

cron.schedule('0 9 * * *', async () => {
  const users = await User.find({ deletedAt: null }).sort({ priority: 1 });
  for (const user of users) {
    const tasks = await Task.find({ userId: user._id, status: 'TODO' }).sort({ priority: 1 });
    for (const task of tasks) {
      const subTasks = await SubTask.find({ taskId: task._id, status: 0 });
      if (subTasks.length === 0) {
        const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
        const message = `Hello ${user.phoneNumber}, this is a reminder to complete your task "${task.title}".`;
        //Uncomment the following line to send a Twilio voice call
          await twilio.calls.create({ to: user.phoneNumber, from: +12186702634, url: 'http://demo.twilio.com/docs/voice.xml' });
      }
    }
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Middleware function to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify
}