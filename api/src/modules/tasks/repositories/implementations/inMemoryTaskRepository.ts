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

    async create({
        title,
        description,
        deadline,
    }: ICreateTaskDTO): Promise<void> {
        const task = new Task();
        Object.assign(task, {
            title,
            description,
            deadline,
            createdAt: new Date(),
        });

        this.task.push(task);
    }

    async list(): Promise<Task[]> {
        return this.task;
    }
}

export { InMemoryTaskRepository };
