// const express = require("express");
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";   
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimit from "./middleware/ratelimiter.js";

dotenv.config();  

const app = express();
const PORT = process.env.PORT || 5001;


// middleware 
app.use(express.json()); // to parse the incoming JSON data
app.use(rateLimit); // to apply rate limiting middleware

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(5001, () => {
    console.log(`Server is running on port 5001: \n http://localhost:${PORT}`);
    })
});

