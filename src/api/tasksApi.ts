import axios from 'axios';
import { Task } from '../types';

const API_URL = '/api';

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (title: string): Promise<Task> => {
  const response = await axios.post(`${API_URL}/tasks`, { title });
  return response.data;
};

export const toggleTask = async (id: number): Promise<Task> => {
  const response = await axios.patch(`${API_URL}/tasks/${id}`);
  return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};