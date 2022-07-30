import { Task } from "../models/Task";
import { ICreateTaskDTO, ITaskRepository } from "./ITaskRepository";

class TaskRepository implements ITaskRepository {
    private task: Task[];

    private static INSTANCE: TaskRepository;

    constructor() {
        this.task = [];
    }

    public static getInstance(): TaskRepository {
        if (!TaskRepository.INSTANCE) {
            TaskRepository.INSTANCE = new TaskRepository();
        }

        return TaskRepository.INSTANCE;
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
