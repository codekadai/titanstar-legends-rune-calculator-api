import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pathsRoutes from "./routes/pathsRoutes";
import playersRoutes from "./routes/playersRoutes";
import { API_PATH } from "./config";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(API_PATH, pathsRoutes);
app.use(API_PATH, playersRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
