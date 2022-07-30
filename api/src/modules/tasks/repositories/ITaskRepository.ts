import { Task } from "../models/Task";

interface ICreateTaskDTO {
    title: string;
    description: string;
    deadline: Date;
}

interface ITaskRepository {
    list(): Task[];
    create({ title, description, deadline }: ICreateTaskDTO): void;
}

export { ITaskRepository, ICreateTaskDTO };
