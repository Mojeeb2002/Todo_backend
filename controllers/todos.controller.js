import mongoose from "mongoose";
import Todo from "../models/todos.model.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTodo = new Todo({
      title,
      description,
    });

    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error.message);
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    console.error(error.message);
  }
};

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: `No todo with id : ${id}` });
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No todo with id : ${id}` });
    }

    const updatedTodo = { title, description, completed, _id: id };

    await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No todo with id : ${id}` });
    }

    await Todo.findByIdAndDelete(id);

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error.message);
  }
};
