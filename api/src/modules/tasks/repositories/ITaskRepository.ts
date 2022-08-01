import { Task } from "../models/Task";

interface ICreateTaskDTO {
    title: string;
    description: string;
    deadline: Date;
}

interface ITaskRepository {
    list(): Promise<Task[]>;
    create({ title, description, deadline }: ICreateTaskDTO): Promise<void>;
}

export { ITaskRepository, ICreateTaskDTO };
