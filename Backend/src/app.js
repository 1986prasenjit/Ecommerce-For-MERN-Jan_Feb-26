import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./connectDb/dbConnect.js";
import userRouter from "./routes/user.routes.js"

dotenv.config({
    path:"./.env"
})

const app = express();

app.use(express.json());

app.use(urlencoded({extended:true}))

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"]
}))

const PORT = process.env.PORT || 5002 

connectDb()

app.use("/api/v1/user", userRouter)

app.listen(PORT, ()=> {
    console.log("Server is listing on PORT Number", PORT)
})