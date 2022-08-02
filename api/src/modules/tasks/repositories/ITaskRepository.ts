import { Task } from "../models/Task";

interface ICreateTaskDTO {
    user_id: string;
    task: {
        id: string;
        title: string;
        description: string;
        deadline: Date;
        createdAt: Date;
    };
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

    create({ user_id, task }: ICreateTaskDTO): Promise<void>;

    update({ user_id, task }: IUpdateTaskDTO): Promise<void>;

    delete(user_id: string, id: string): Promise<void>;
}

export { ITaskRepository, ICreateTaskDTO, IUpdateTaskDTO };
