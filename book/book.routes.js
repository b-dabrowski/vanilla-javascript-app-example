import { bookController } from "./book.controller.js";
import express from "express";

const BOOKS_ROUTE_PATH = "/books"
const bookRoutes = express.Router();

bookRoutes.post("/", bookController.createOrUpdate);
bookRoutes.get("/", bookController.list);
bookRoutes.get(`/:isbn`, bookController.details);
bookRoutes.delete(`/:isbn`, bookController.deleteOne);

export { bookRoutes, BOOKS_ROUTE_PATH };
