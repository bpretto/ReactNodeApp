export interface IUser {
    email: string;
    name?: string;
    password: string;
}

export interface ITask {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    created_at: Date;
};

export interface ICreateTaskDTO {
    title: string;
    description: string;
    deadline: Date;
}