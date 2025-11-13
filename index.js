/** @format */

import express from "express";
const app = express();
import { configDotenv } from "dotenv";
import cors from "cors";
import { requestLogger } from "./middleware/logger.middleware.js";
configDotenv();

// Middleware Connections
app.use(express.json());

app.use(requestLogger);

const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://127.0.0.1:5500/cors-test.html",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, false);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Routes

// Connection

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(
        "App running in port: " + PORT,
        "🥳",
        `http://localhost:${PORT} 🫴🏻🥶`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
