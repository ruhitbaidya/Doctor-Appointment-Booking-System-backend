import express from "express";
import cors from "cors";
import rootRouter from "./router/router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(rootRouter)
app.get("/", (req, res)=>{
    res.send("Hello World");
})


export default app;