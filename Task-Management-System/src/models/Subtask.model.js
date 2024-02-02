import mongoose, { Schema } from 'mongoose';

const subTaskSchema = new Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  status: { type: Number, enum: [0, 1], default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
});

export const SubTask = mongoose.model('SubTask', subTaskSchema);
