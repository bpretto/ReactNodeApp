import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, name, password } = req.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({ email, name, password });

        return res.status(201).send();
    }
}

export { CreateUserController };
