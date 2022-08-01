import { Task } from "../../tasks/models/Task";

class User {
    id: string;
    name: string;
    email: string;
    password?: string;
    tasks?: Task[];
}

export { User };
