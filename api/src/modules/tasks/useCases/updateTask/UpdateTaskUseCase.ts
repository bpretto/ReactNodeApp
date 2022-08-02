import { verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IRequest {
    id: string;
    token: string;
    title: string;
    description: string;
    deadline: Date;
}

interface IPayload {
    sub: string;
}

@injectable()
class UpdateTaskUseCase {
    constructor(
        @inject("TaskRepository")
        private taskRepository: ITaskRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        id,
        token,
        title,
        description,
        deadline,
    }: IRequest): Promise<void> {
        const [, payload] = token.split(" ");
        const { sub: user_id } = verify(payload, auth.secret_token) as IPayload;
        await this.taskRepository.update({
            user_id,
            task: {
                id,
                title,
                description,
                deadline,
            },
        });
    }
}

export { UpdateTaskUseCase };
