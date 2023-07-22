import express from "express";
import {PORT} from "./config/serverConfig.js";

const setupAndStartServer = ()=>{
    //create the express instance
    const app = express();
    app.listen(PORT,()=>{
        console.log(`Flight and search service is running on ${PORT}`);
    })
} 

setupAndStartServer();