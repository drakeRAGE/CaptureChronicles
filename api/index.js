import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
import path from 'path';
import './scripts/pingServer.js'; // Runs in background async

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(5000, () => {
  console.log('listening on port 5000!');
});

// Root API
app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello, it's root!" });
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/gallery/dist')));
// If you use create react app then change the
//dist to build

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'gallery', 'dist', 'index.html'));
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
