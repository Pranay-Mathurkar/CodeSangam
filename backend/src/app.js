import express from 'express';
import cors from 'cors';

import mongoose from "mongoose";
import router from "./routes/user.js";
import dotenv from "dotenv";

import "./controllers/user.controller.js";




dotenv.config();


const app = express();


app.set("port", (process.env.PORT || 3000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));



app.get('/home', (req, res) => {
    res.send('Hello World!');
});

app.use("/", router);

const start = async () => {
  
    const connectionDb = await mongoose.connect("mongodb+srv://pranaymnnit123_db_user:gqiOlgk4bpMtgNEA@cluster0.morcz9e.mongodb.net/")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
     app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });



}



start();