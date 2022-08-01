import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;
        const { title, description, deadline } = req.body;

        const createTaskUseCase = container.resolve(CreateTaskUseCase);
        await createTaskUseCase.execute({
            token,
            title,
            description,
            deadline,
        });

        return res.status(201).json({ message: "Task created" });
    }
}

export { CreateTaskController };
