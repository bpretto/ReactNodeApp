import { verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IPayload {
    sub: string;
}

@injectable()
class ListTasksUseCase {
    constructor(
        @inject("TaskRepository")
        private taskRepository: ITaskRepository
    ) {}

    execute(token: string): Promise<Task[]> {
        const [, payload] = token.split(" ");
        const { sub: user_id } = verify(payload, auth.secret_token) as IPayload;
        const tasks = this.taskRepository.list(user_id);
        return tasks;
    }
}

export { ListTasksUseCase };
