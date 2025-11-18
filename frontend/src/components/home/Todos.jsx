import React from 'react';
import Todo from './Todo';

const Todos = ({ data, onTaskDeleted }) => {
  // Handle case where data might be undefined or have different structure
  const dataItems = data?.data || [];

  return (
    <div className="my-6 bg-lime-100 px-4 py-6 rounded-3xl shadow-md">
      <h2 className="text-center font-bold text-2xl md:text-3xl text-gray-800 mb-4">
        Your Tasks
      </h2>

      <div className="flex flex-col gap-4">
        {dataItems.length > 0 ? (
          dataItems.map((datam, index) => (
            <Todo key={datam._id || index} datam={datam} onTaskDeleted={onTaskDeleted} />
          ))
        ) : (
          <p className="text-center text-gray-600">No tasks found. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default Todos;