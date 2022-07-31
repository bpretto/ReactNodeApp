import { Task } from "../../models/Task";
import { ICreateTaskDTO, ITaskRepository } from "../ITaskRepository";

class InMemoryTaskRepository implements ITaskRepository {
    private task: Task[];

    private static INSTANCE: InMemoryTaskRepository;

    constructor() {
        this.task = [];
    }

    public static getInstance(): InMemoryTaskRepository {
        if (!InMemoryTaskRepository.INSTANCE) {
            InMemoryTaskRepository.INSTANCE = new InMemoryTaskRepository();
        }

        return InMemoryTaskRepository.INSTANCE;
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

export { InMemoryTaskRepository };
