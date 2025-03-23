import express from "express";
import { PORT } from "./config/env.js";
import connectToMongoDB from "./database/database.js";
import todosRouter from "./routes/todos.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Todos API!");
});


app.use("/api/v1/todos", todosRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);

  connectToMongoDB();
});
