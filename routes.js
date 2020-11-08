import {bookRoutes, BOOKS_ROUTE_PATH} from "./book/book.routes.js"
import express from "express";

const routes = express.Router();

routes.use(BOOKS_ROUTE_PATH, bookRoutes)

export {routes}