// import { v4 as uuid } from "uuid";

class Task {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    createdAt: Date;

    // constructor() {
    //     if (!this.id) {
    //         this.id = uuid();
    //     }
    // }
}

export { Task };
