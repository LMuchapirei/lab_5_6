import React from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { ErrorMessage } from './components/ErrorMessage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useTasks } from './hooks/useTasks';

function App() {
  const {
    tasks,
    loading,
    error,
    addTask,
    toggleTaskCompletion,
    removeTask,
  } = useTasks();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <Header />
          <TaskInput onAdd={addTask} />

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <TaskList
              tasks={tasks}
              onToggle={toggleTaskCompletion}
              onDelete={removeTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;