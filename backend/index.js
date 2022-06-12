import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import  HeroRoutes  from "./routes/HeroRoute.js"

const app = express();


try {
    await db.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("connection error: ", error);
  }

app.use(cors());
app.use(express.json());
app.use(HeroRoutes)



app.listen(5000, () => {
  console.log("server is running....");
});
