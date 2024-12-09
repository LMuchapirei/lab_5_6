import React from 'react';
import { ListTodo } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 mb-8">
      <ListTodo size={28} className="text-blue-500" />
      <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
    </div>
  );
};