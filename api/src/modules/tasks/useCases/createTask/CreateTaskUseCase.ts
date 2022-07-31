import { inject, injectable } from "tsyringe";

import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IRequest {
    title: string;
    description: string;
    deadline: Date;
}

@injectable()
class CreateTaskUseCase {
    constructor(
        @inject("TaskRepository")
        private taskRepository: ITaskRepository
    ) {}

    execute({ title, description, deadline }: IRequest): void {
        this.taskRepository.create({ title, description, deadline });
    }
}

export { CreateTaskUseCase };
