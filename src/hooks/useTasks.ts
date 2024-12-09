import { useState, useEffect } from 'react';
import { Task } from '../types';
import { getTasks, createTask, toggleTask, deleteTask } from '../api/tasksApi';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string) => {
    try {
      const newTask = await createTask(title);
      setTasks([...tasks, newTask]);
      return true;
    } catch (err) {
      setError('Failed to add task');
      return false;
    }
  };

  const toggleTaskCompletion = async (id: number) => {
    try {
      const updatedTask = await toggleTask(id);
      setTasks(tasks.map(task => 
        task.id === id ? updatedTask : task
      ));
      return true;
    } catch (err) {
      setError('Failed to update task');
      return false;
    }
  };

  const removeTask = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
      return true;
    } catch (err) {
      setError('Failed to delete task');
      return false;
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    toggleTaskCompletion,
    removeTask,
  };
};