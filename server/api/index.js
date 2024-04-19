import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO,).then(()=>{
    console.log('connect');
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.listen(3001,()=>{
    console.log('server listen on port 3001');
})

app.use('/api/user', userRoutes);
app.use('/api/auth',auth);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal sever error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});