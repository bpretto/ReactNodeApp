import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

class UpdateTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;
        const { id, title, description, deadline } = req.body;

        const updateTaskUseCase = container.resolve(UpdateTaskUseCase);
        await updateTaskUseCase.execute({
            id,
            token,
            title,
            description,
            deadline,
        });

        return res.status(200).json({ message: "Task Updated" });
    }
}

export { UpdateTaskController };
