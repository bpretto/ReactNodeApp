import { Router } from "express";

import { db } from "../firestore/firestore";
import { Task } from "../shared/models/Task";
import { TaskRepository } from "../shared/repositories/taskRepository";
import { CreateTaskService } from "../shared/services/createTaskService";

const tasksRoutes = Router();
const taskRepository = new TaskRepository();

tasksRoutes.post("/create", async (req, res) => {
    const { title, description, deadline } = req.body;

    const createTaskService = new CreateTaskService(taskRepository);
    createTaskService.execute({ title, description, deadline });
    // const docRef = db.collection("bpretto").doc(task.id);
    // await docRef.set(task);
    return res.status(201).json({ message: "Task created" });
});

tasksRoutes.get("/", async (req, res) => {
    const list = taskRepository.list();

    return res.json(list);
});

// tasksRoutes.get("/list", async (req, res) => {
//     const tasks = await db.collection(username).get();
//     tasks.forEach((doc) => {
//         console.log(doc.id, "=>", doc.data());
//     });
//     return res.status(200).json(tasks);
// });

export { tasksRoutes };
