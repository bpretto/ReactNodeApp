import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTasksUseCase } from "./ListTasksUseCase";

class ListTasksController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listTasksUseCase = container.resolve(ListTasksUseCase);

        const tasks = await listTasksUseCase.execute();

        return res.json(tasks);
    }
}

export { ListTasksController };
