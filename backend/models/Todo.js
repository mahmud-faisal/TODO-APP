const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  desc: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  taskDate: {
    type: Date,
    required: [true, 'Please add a task date']
  },
  taskTime: {
    type: String,
    required: [true, 'Please add a task time']
  },
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Index for better query performance
todoSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model('Todo', todoSchema);