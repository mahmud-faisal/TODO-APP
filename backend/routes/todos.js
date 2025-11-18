const express = require('express');
const { body } = require('express-validator');
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodoComplete
} = require('../controllers/todoController');
const { protect } = require('../middleware/auth');
const { handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// Validation rules
const todoValidation = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot be more than 100 characters'),
  body('desc')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Description cannot be more than 500 characters'),
  body('taskDate')
    .isISO8601()
    .withMessage('Please provide a valid date'),
  body('taskTime')
    .notEmpty()
    .withMessage('Time is required')
];

// All routes are protected
router.use(protect);

router.route('/')
  .get(getTodos)
  .post(todoValidation, handleValidationErrors, createTodo);

router.route('/:id')
  .put(todoValidation, handleValidationErrors, updateTodo)
  .delete(deleteTodo);

router.patch('/:id', toggleTodoComplete);

module.exports = router;