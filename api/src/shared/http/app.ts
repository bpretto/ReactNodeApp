import express from "express";
import "reflect-metadata";

import { tasksRoutes } from "../../routes/tasks.routes";

const app = express();
app.use(express.json());
app.use(tasksRoutes); // trocar para routes

export { app };
