import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorHandler.middleware.js';
import express from 'express';
import taskRouter from './routes/task.routes.js';
import userRouter from './routes/user.routes.js';

const app = express();

dotenv.config({ path: './.env' });

app.use(cors({
    origin: '*',
    credentials: true
}));

// Major Configurations -> Production Level Code

// Parse incoming JSON requests with a size limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Parse URL-encoded data with extended support and a size limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));


// Routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

// errorHandler Middleware
app.use(errorHandler);

export { app };
