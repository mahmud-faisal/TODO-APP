import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';


const API_URL = 'http://localhost:3001/api/todos';

export const NewTodo = ({ onTaskAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    date: '',
    time: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { user } = useAuth();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleNewTodo = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setError('You must be logged in to add todos');
      return;
    }

    // Validation
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    if (!formData.date) {
      setError('Date is required');
      return;
    }

    if (!formData.time) {
      setError('Time is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(API_URL, {
        title: formData.title.trim(),
        desc: formData.desc.trim(),
        taskDate: formData.date,
        taskTime: formData.time
      });

      // Reset form
      setFormData({ 
        title: '', 
        desc: '', 
        date: '', 
        time: '' 
      });
      
      // Notify parent to refresh todos
      onTaskAdded();
      
      console.log("Todo added successfully:", response.data);
    } catch (error) {
      console.log("Error in post:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || 'Failed to add todo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <form 
      onSubmit={handleNewTodo} 
      className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 shadow-md w-full border border-green-200"
    >
      <h2 className="text-xl font-bold text-center mb-4 text-gray-800">Add a New Task</h2>

      {/* Error Message */}
      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold mb-2 text-gray-700">
          Title *
        </label>
        <input 
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleOnChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
          placeholder="Enter task title"
          required
          disabled={loading}
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="desc" className="block font-semibold mb-2 text-gray-700">
          Description
        </label>
        <textarea
          name="desc"
          id="desc"
          value={formData.desc}
          onChange={handleOnChange}
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
          rows="3"
          placeholder="Enter task description (optional)"
          disabled={loading}
        ></textarea>
      </div>

      {/* Date & Time */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="date" className="block font-semibold mb-2 text-gray-700">
            Date *
          </label>
          <input 
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleOnChange}
            min={getTodayDate()}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            required
            disabled={loading}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="time" className="block font-semibold mb-2 text-gray-700">
            Time *
          </label>
          <input 
            type="time"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleOnChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            required
            disabled={loading}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button 
          type="submit" 
          disabled={loading || !user}
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
        >
          {loading ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Adding Task...
            </div>
          ) : (
            'Add Task'
          )}
        </button>
      </div>

      {/* User Info */}
      {user && (
        <div className="mt-4 text-center text-sm text-gray-600">
          Adding task as: <span className="font-semibold">{user.name}</span>
        </div>
      )}
    </form>
  );
};

export default NewTodo;