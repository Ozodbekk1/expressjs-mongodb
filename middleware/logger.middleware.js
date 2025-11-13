/** @format */

// logger.js
import fs from "fs";
import path from "path";

const logFile = path.join(process.cwd(), "logs.txt");

// General logging function
export const logMessage = (message) => {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ${message}\n`;

  // Log to console
  console.log(log.trim());

  // Append to log file
  fs.appendFile(logFile, log, (err) => {
    if (err) console.error("Error writing to log file:", err);
  });
};

// Middleware for request logging
export const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const log = `[${new Date().toISOString()}] ${req.method} ${
      req.originalUrl
    } ${res.statusCode} - ${duration}ms - IP: ${req.ip}`;

    console.log(log);

    fs.appendFile(logFile, log + "\n", (err) => {
      if (err) console.error("Error writing to log file:", err);
    });
  });

  next();
};
