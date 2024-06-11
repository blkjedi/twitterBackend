import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import tweetsRouter from './routes/tweets.js';
import cors from 'cors'
import morgan from 'morgan';


dotenv.config();
mongoose.connect(process.env.ATLAS_URI);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'))

app.use(cors());

app.use('/tweets', tweetsRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));