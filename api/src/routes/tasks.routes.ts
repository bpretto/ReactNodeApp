import { Router } from "express";

import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
// import { ListTaskController } from "../modules/tasks/useCases/listTasks";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();

tasksRoutes.post("/create", createTaskController.handle);

// tasksRoutes.get("/", async (req, res) => {
//     return listTaskController.handle(req, res);
// });

// tasksRoutes.get("/list", async (req, res) => {
//     const tasks = await db.collection(username).get();
//     tasks.forEach((doc) => {
//         console.log(doc.id, "=>", doc.data());
//     });
//     return res.status(200).json(tasks);
// });

export { tasksRoutes };
