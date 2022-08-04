import { verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { v4 as uuid } from "uuid";

import auth from "../../../../config/auth";
import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IRequest {
    token: string;
    title: string;
    description: string;
    deadline: Date;
}

interface IPayload {
    sub: string;
}

@injectable()
class CreateTaskUseCase {
    constructor(
        @inject("TaskRepository")
        private taskRepository: ITaskRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        token,
        title,
        description,
        deadline,
    }: IRequest): Promise<void> {
        const [, payload] = token.split(" ");
        const { sub: user_id } = verify(payload, auth.secret_token) as IPayload;
        await this.taskRepository.create({
            user_id,
            task: {
                id: uuid(),
                title,
                description,
                deadline,
                createdAt: new Date(),
            },
        });
    }
}

export { CreateTaskUseCase };
