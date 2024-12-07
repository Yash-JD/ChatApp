import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/AuthRoutes.js';

dotenv.config(); // with this all the environment variable will be inside process.env

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

// cors is used to communicate between front-end & back-end
app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);

const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
});

mongoose.connect(databaseURL)
    .then(() => console.log('Database connnectd'))
    .catch(err=>console.log(err.message))
    
