import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // phoneNumber: {
  //   type: Number,
  //   required: true
  // },
  // priority: {
  //   type: Number,
  //   enum: [0, 1, 2],
  //   default: 0
  // },
  // deletedAt: {
  //   type: Date,
  //   default: null
  // }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

