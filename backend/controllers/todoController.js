const Todo = require('../models/Todo');

// @desc    Get all todos for user
// @route   GET /api/todos
// @access  Private
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    console.error('Get todos error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching todos'
    });
  }
};

// @desc    Create new todo
// @route   POST /api/todos
// @access  Private
const createTodo = async (req, res) => {
  try {
    const { title, desc, taskDate, taskTime } = req.body;

    const todo = await Todo.create({
      title,
      desc,
      taskDate,
      taskTime,
      user: req.user.id
    });

    res.status(201).json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Create todo error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating todo'
    });
  }
};

// @desc    Update todo
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    // Check if user owns the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this todo'
      });
    }

    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Update todo error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating todo'
    });
  }
};

// @desc    Delete todo
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    // Check if user owns the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this todo'
      });
    }

    await Todo.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    console.error('Delete todo error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting todo'
    });
  }
};

// @desc    Toggle todo completion status
// @route   PATCH /api/todos/:id
// @access  Private
const toggleTodoComplete = async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    // Check if user owns the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this todo'
      });
    }

    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: !todo.completed },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Toggle todo error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating todo'
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodoComplete
};