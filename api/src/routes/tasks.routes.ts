import { Router } from "express";

import { createTaskController } from "../modules/tasks/useCases/createTask";
import { listTaskController } from "../modules/tasks/useCases/listTasks";

const tasksRoutes = Router();

tasksRoutes.post("/create", async (req, res) => {
    return createTaskController.handle(req, res);
});

tasksRoutes.get("/", async (req, res) => {
    return listTaskController.handle(req, res);
});

// tasksRoutes.get("/list", async (req, res) => {
//     const tasks = await db.collection(username).get();
//     tasks.forEach((doc) => {
//         console.log(doc.id, "=>", doc.data());
//     });
//     return res.status(200).json(tasks);
// });

export { tasksRoutes };
