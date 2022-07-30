import { Request, Response } from "express";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
    constructor(private createTaskUseCase: CreateTaskUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        // const { id } = req.user;
        const { title, description, deadline } = req.body;

        this.createTaskUseCase.execute({ title, description, deadline });
        // const docRef = db.collection("bpretto").doc(task.id);
        // await docRef.set(task);
        return res.status(201).json({ message: "Task created" });
    }
}

export { CreateTaskController };
