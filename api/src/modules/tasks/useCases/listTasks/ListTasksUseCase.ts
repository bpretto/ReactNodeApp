import { inject, injectable } from "tsyringe";

import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";

@injectable()
class ListTasksUseCase {
    constructor(
        @inject("TaskRepository")
        private taskRepository: ITaskRepository
    ) {}

    execute(): Task[] {
        const tasks = this.taskRepository.list();

        return tasks;
    }
}

export { ListTasksUseCase };
