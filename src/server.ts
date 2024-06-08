import express from 'express';
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});