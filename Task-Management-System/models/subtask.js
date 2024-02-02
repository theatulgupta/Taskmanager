const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
const subTaskSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  status: { type: Number, enum: [0, 1], default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
});

const SubTask = mongoose.model('SubTask', subTaskSchema);

module.exports = SubTask;
