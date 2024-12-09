import express from 'express';
import cors from 'cors';
import { createTaskRouter } from './routes/taskRoutes.js';

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// In-memory storage for tasks
let tasks = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a Full Stack App', completed: false },
];

// Routes
app.use('/api/tasks', createTaskRouter(tasks));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});