import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import morganBody from "morgan-body";
import express from "express";
import { API_PREFIX } from "./config/environment";
import currencyRouter from "./routes/currencyConverter";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

morganBody(app, {
  prettify: true,
  logReqUserAgent: true,
  logReqDateTime: true,
});

// Routes
app.use(`${API_PREFIX}`, currencyRouter);
app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Welcome to DoubleDate APIs" });
});

export default app;
