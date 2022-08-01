import { verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

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
        const { sub: user_id } = verify(
            payload,
            "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4"
        ) as IPayload;
        await this.taskRepository.create({
            user_id,
            title,
            description,
            deadline,
        });
    }
}

export { CreateTaskUseCase };
