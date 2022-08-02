import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

class DeleteTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;
        const { id } = req.body;

        const deleteTaskUseCase = container.resolve(DeleteTaskUseCase);
        await deleteTaskUseCase.execute({
            id,
            token,
        });

        return res.status(200).json({ message: "Task Deleted" });
    }
}

export { DeleteTaskController };
