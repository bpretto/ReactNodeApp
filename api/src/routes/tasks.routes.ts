import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { ListTasksController } from "../modules/tasks/useCases/listTasks/ListTasksController";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const listTaskController = new ListTasksController();

tasksRoutes.use(ensureAuthenticated);
tasksRoutes.post("/create", createTaskController.handle);
tasksRoutes.get("/", listTaskController.handle);

// tasksRoutes.get("/list", async (req, res) => {
//     const tasks = await db.collection(username).get();
//     tasks.forEach((doc) => {
//         console.log(doc.id, "=>", doc.data());
//     });
//     return res.status(200).json(tasks);
// });

export { tasksRoutes };
