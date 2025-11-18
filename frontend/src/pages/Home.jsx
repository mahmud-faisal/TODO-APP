import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import Todos from '../components/home/Todos';
import NewTodo from '../components/home/NewTodo';
import Header from '../components/home/Header';

const Home = () => {
  const API_URL = 'http://localhost:3001/api/todos';
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { user } = useAuth();

  const handleRefresh = () => {
    setRefresh(prev => !prev);
  };

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error(`Fetching error: ${error.message}`);
      }
    };
    
    if (user) {
      fetchTodo();
    }
  }, [refresh, user]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center py-10 px-4 md:px-10">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome back, {user.name}!
          </h1>

          {/* New Todo Form */}
          <div className="mb-6">
            <NewTodo onTaskAdded={handleRefresh} />
          </div>

          {/* Todo List */}
          <Todos data={data} onTaskDeleted={handleRefresh} />
        </div>
      </div>
    </div>
  );
};

export default Home;