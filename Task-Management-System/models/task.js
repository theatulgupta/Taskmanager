const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  priority: { type: Number, required: true },
  status: { type: String, enum: ['TODO', 'IN_PROGRESS', 'DONE'], default: 'TODO' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  deletedAt: { type: Date, default: null }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
