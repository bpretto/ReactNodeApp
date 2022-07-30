import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";

class ListTasksUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    execute(): Task[] {
        const tasks = this.taskRepository.list();

        return tasks;
    }
}

export { ListTasksUseCase };
