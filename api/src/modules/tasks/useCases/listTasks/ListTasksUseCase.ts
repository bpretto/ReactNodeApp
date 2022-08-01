import { verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

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
        const { sub: user_id } = verify(
            payload,
            "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4"
        ) as IPayload;
        const tasks = this.taskRepository.list(user_id);
        return tasks;
    }
}

export { ListTasksUseCase };
