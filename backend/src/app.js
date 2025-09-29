import express from 'express';
import cors from 'cors';
//import {CreateServer} from "node:http";
import mongoose from "mongoose";



const app = express();

app.use(cors());


app.get('/home', (req, res) => {
    res.send('Hello World!');
});

const start =async () => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}
start();