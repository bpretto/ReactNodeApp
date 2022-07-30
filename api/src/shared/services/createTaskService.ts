import { TaskRepository } from "../repositories/taskRepository";

interface IRequest {
    title: string;
    description: string;
    deadline: Date;
}

class CreateTaskService {
    constructor(private taskRepository: TaskRepository) { }

    execute({ title, description, deadline }: IRequest): void {
        this.taskRepository.create({ title, description, deadline });
    }
}

export { CreateTaskService };
