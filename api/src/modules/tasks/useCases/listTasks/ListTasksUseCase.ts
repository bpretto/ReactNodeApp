import { inject, injectable } from "tsyringe";

import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";

@injectable()
class ListTasksUseCase {
    constructor(
        @inject("TaskRepository")
        private taskRepository: ITaskRepository
    ) {}

    execute(): Promise<Task[]> {
        const tasks = this.taskRepository.list();
        return tasks;
    }
}

export { ListTasksUseCase };
