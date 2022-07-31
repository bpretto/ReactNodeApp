import * as express from "express";
import "reflect-metadata";

import { tasksRoutes } from "../../routes/tasks.routes";
import "../container";

const app = express();
app.use(express.json());
app.use(tasksRoutes); // trocar para routes

export { app };
