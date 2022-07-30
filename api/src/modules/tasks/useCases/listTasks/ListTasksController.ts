import { Request, Response } from "express";

import { ListTasksUseCase } from "./ListTasksUseCase";

class ListTasksController {
    constructor(private listTasksUseCase: ListTasksUseCase) {}
    handle(req: Request, res: Response): Response {
        const list = this.listTasksUseCase.execute();

        return res.json(list);
    }
}

export { ListTasksController };
