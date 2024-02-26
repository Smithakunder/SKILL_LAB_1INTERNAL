import express from 'express';
import { authRoutes } from './routes/authRoutes.js';
import { foodRoutes } from './routes/foodRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', foodRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



