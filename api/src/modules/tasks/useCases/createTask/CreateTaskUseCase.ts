import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IRequest {
    title: string;
    description: string;
    deadline: Date;
}

class CreateTaskUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    execute({ title, description, deadline }: IRequest): void {
        this.taskRepository.create({ title, description, deadline });
    }
}

export { CreateTaskUseCase };
