import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pathsRoutes from "./routes/pathsRoutes";
import playersRoutes from "./routes/playersRoutes";
import { API_URL } from "./config";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(API_URL, pathsRoutes);
app.use(API_URL, playersRoutes);

module.exports = app;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
