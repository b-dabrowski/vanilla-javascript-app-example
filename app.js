import { routes } from "./routes.js";
import {appErrorHandler, notFoundErrorHandler} from "./error.handler.js"
import express from "express";

const app = express();

app.use(express.json());
app.use(routes);
app.use(notFoundErrorHandler);
app.use(appErrorHandler);

export { app };
