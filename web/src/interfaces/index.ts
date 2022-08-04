export interface IUser {
    email: string;
    name?: string;
    password: string;
}

export interface ITask {
    id: string;
    title: string;
    description: string;
    deadline: string;
    created_at: string;
};