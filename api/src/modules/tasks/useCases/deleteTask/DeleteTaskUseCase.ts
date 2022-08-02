import { verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IRequest {
    id: string;
    token: string;
}

interface IPayload {
    sub: string;
}

@injectable()
class DeleteTaskUseCase {
    constructor(
        @inject("TaskRepository")
        private taskRepository: ITaskRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ id, token }: IRequest): Promise<void> {
        const [, payload] = token.split(" ");
        const { sub: user_id } = verify(payload, auth.secret_token) as IPayload;
        await this.taskRepository.delete(user_id, id);
    }
}

export { DeleteTaskUseCase };
