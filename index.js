import express from "express";  

import { HOST, PORT } from "./common/configs/enviroments.js";
import connectDB from "./common/configs/db.js";
import router from './routes/index.js';

connectDB()

const app = express();

app.use(express.json())

app.use("/api", router)

app.listen(PORT, HOST, ()=> {
    console.log(`Sever runnign at http://${HOST}:${PORT}`);
})

