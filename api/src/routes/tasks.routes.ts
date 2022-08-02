import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { DeleteTaskController } from "../modules/tasks/useCases/deleteTask/DeleteTaskController";
import { ListTasksController } from "../modules/tasks/useCases/listTasks/ListTasksController";
import { UpdateTaskController } from "../modules/tasks/useCases/updateTask/UpdateTaskController";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();
const listTaskController = new ListTasksController();

tasksRoutes.use(ensureAuthenticated);
tasksRoutes.post("/create", createTaskController.handle);
tasksRoutes.put("/update", updateTaskController.handle);
tasksRoutes.delete("/delete", deleteTaskController.handle);

tasksRoutes.get("/", listTaskController.handle);

export { tasksRoutes };
