import { Router } from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todos.controller.js";


const todosRouter = Router();

todosRouter.post("/", createTodo);

todosRouter.get("/", getTodos);

todosRouter.get("/:id", getTodo);

todosRouter.put("/:id", updateTodo);

todosRouter.delete("/:id", deleteTodo);


export default todosRouter;