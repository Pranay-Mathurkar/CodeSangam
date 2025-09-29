import express from 'express';
import cors from 'cors';

import mongoose from "mongoose";



const app = express();


app.set("port", (process.env.PORT || 3000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));



app.get('/home', (req, res) => {
    res.send('Hello World!');
});



const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://pranaymnnit123_db_user:wm0O5BYQUaLNE73u@cluster0.morcz9e.mongodb.net/")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
     app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });



}



start();