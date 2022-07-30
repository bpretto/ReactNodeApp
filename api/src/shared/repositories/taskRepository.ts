import { Task } from "../models/Task";

interface ICreateTaskDTO {
    title: string;
    description: string;
    deadline: Date;
}

class TaskRepository {
    private task: Task[];

    constructor() {
        this.task = [];
    }

    create({ title, description, deadline }: ICreateTaskDTO): void {
        const task = new Task();
        Object.assign(task, {
            title,
            description,
            deadline,
            completed: false,
            createdAt: new Date(),
        });

        this.task.push(task);
    }

    list(): Task[] {
        return this.task;
    }
}

export { TaskRepository };
