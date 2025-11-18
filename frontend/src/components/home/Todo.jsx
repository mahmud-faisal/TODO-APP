import React, { useState } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaBusinessTime, FaCalendarAlt, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const Todo = (props) => {
  const { title, desc, taskDate, taskTime, _id, completed } = props.datam;
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title,
    desc,
    taskDate,
    taskTime
  });

  const API_URL = 'http://localhost:3001/api/todos';

  const handleRemoveTodo = async () => {
    try {
      await axios.delete(`${API_URL}/${_id}`);
      props.onTaskDeleted();
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const handleToggleComplete = async () => {
    try {
      await axios.patch(`${API_URL}/${_id}`, {
        completed: !completed
      });
      props.onTaskDeleted(); // Refresh the list
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ title, desc, taskDate, taskTime });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditData({ title, desc, taskDate, taskTime });
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`${API_URL}/${_id}`, editData);
      setIsEditing(false);
      props.onTaskDeleted(); // Refresh the list
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return new Date(`1970-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className={`bg-white p-4 my-2 rounded-2xl border-l-4 ${
      completed ? 'border-green-500 bg-green-50' : 'border-blue-500'
    } shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center flex-1">
          <input 
            type="checkbox" 
            checked={completed}
            onChange={handleToggleComplete}
            className='transform scale-125 cursor-pointer mr-3'
          />
          {isEditing ? (
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleEditChange}
              className="font-bold text-xl flex-1 border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 bg-transparent"
              autoFocus
            />
          ) : (
            <h2 className={`font-bold text-xl flex-1 ${
              completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}>
              {title}
            </h2>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSaveEdit}
                className="text-green-600 hover:text-green-800 cursor-pointer p-1 rounded-full hover:bg-green-100"
                title="Save"
              >
                <FaSave className="text-lg" />
              </button>
              <button
                onClick={handleCancelEdit}
                className="text-gray-600 hover:text-gray-800 cursor-pointer p-1 rounded-full hover:bg-gray-100"
                title="Cancel"
              >
                <FaTimes className="text-lg" />
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="text-blue-600 hover:text-blue-800 cursor-pointer p-1 rounded-full hover:bg-blue-100"
              title="Edit"
            >
              <FaEdit className="text-lg" />
            </button>
          )}
          <button
            onClick={handleRemoveTodo}
            className="text-red-600 hover:text-red-800 cursor-pointer p-1 rounded-full hover:bg-red-100"
            title="Delete"
          >
            <FaTrashAlt className="text-lg" />
          </button>
        </div>
      </div>

      {isEditing ? (
        <textarea
          name="desc"
          value={editData.desc}
          onChange={handleEditChange}
          className="w-full p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
          rows="2"
        />
      ) : (
        <p className={`text-gray-600 mb-3 ${completed ? 'line-through' : ''}`}>
          {desc}
        </p>
      )}

      <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
        <div className="flex items-center">
          <FaCalendarAlt className="mr-1" />
          {isEditing ? (
            <input
              type="date"
              name="taskDate"
              value={editData.taskDate}
              onChange={handleEditChange}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          ) : (
            <span>{formatDate(taskDate)}</span>
          )}
        </div>
        
        <div className="flex items-center">
          <FaBusinessTime className="mr-1" />
          {isEditing ? (
            <input
              type="time"
              name="taskTime"
              value={editData.taskTime}
              onChange={handleEditChange}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          ) : (
            <span>{formatTime(taskTime)}</span>
          )}
        </div>

        {completed && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            Completed
          </span>
        )}
      </div>
    </div>
  );
};

export default Todo;