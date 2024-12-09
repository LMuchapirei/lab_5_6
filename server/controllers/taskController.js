// Task controller with business logic
export const taskController = {
  getAllTasks: (tasks) => (req, res) => {
    res.json(tasks);
  },

  createTask: (tasks) => (req, res) => {
    const newTask = {
      id: tasks.length + 1,
      title: req.body.title,
      completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  },

  toggleTask: (tasks) => (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
      task.completed = !task.completed;
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  },

  deleteTask: (tasks) => (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  },
};