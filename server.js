import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors"
import morgan from "morgan";

import connectDB from "./db/db.js"
import ErrorHandler from "./middlewares/error.js"
import router from "./routes/index.js";

dotenv.config();

connectDB();

const app = express();

const server =  http.createServer(app);

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/v1" , router)
app.get("/", (req,res) => {
    res.send("hello world")
})


app.use(ErrorHandler)


const PORT  = process.env.PORT || 5002


server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})