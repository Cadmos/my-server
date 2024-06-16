import express from 'express';
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

const startServer = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
    }

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
};

startServer();