import express, { urlencoded } from "express";
import nodemon from "nodemon";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";  
import connectdb from "./utils/db.js";
import userRoute from "./routes/user.route.js";


dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}))
const corsoption = {
    origin:'http://localhost:5137',
    credentials: true
}

app.use(cors(corsoption));
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);

app.listen(PORT,()=>{
    connectdb();
    console.log(`server running on port ${PORT}`);
})