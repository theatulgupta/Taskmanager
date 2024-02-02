const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
const userSchema = new mongoose.Schema({
  phoneNumber: { type: Number, required: true },
  priority: { type: Number, enum: [0, 1, 2], default: 0 },
  deletedAt: { type: Date, default: null }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
