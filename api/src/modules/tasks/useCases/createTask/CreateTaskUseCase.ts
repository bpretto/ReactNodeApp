import { decode } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IRequest {
    token: string;
    title: string;
    description: string;
    deadline: Date;
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
        console.log(decode(token));
        const user = await this.userRepository.findByEmail(token);
        console.log(user);
        await this.taskRepository.create({ title, description, deadline });
    }
}

export { CreateTaskUseCase };
