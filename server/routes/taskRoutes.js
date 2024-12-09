import express from 'express';
import { taskController } from '../controllers/taskController.js';

export const createTaskRouter = (tasks) => {
  const router = express.Router();
  
  router.get('/', taskController.getAllTasks(tasks));
  router.post('/', taskController.createTask(tasks));
  router.patch('/:id', taskController.toggleTask(tasks));
  router.delete('/:id', taskController.deleteTask(tasks));
  
  return router;
};