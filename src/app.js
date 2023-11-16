import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.on("error", (error) => {
  console.log("server is not able to talk with database");
  throw error;
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

export default app;
