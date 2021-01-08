import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import postRoutes from "./routes/posts.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//routes
app.use("/posts", postRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running on port: ${PORT}`));
