import { Task } from "../models/Task";

interface ICreateTaskDTO {
    user_id: string;
    title: string;
    description: string;
    deadline: Date;
}

interface IUpdateTaskDTO {
    task: {
        id: string;
        title: string;
        description: string;
        deadline: Date;
    };
    user_id: string;
}

interface ITaskRepository {
    list(user_id): Promise<Task[]>;

    create({
        user_id,
        title,
        description,
        deadline,
    }: ICreateTaskDTO): Promise<void>;

    update({
        user_id,
        title,
        description,
        deadline,
    }: IUpdateTaskDTO): Promise<void>;
}

export { ITaskRepository, ICreateTaskDTO, IUpdateTaskDTO };
