import { v4 as uuid } from "uuid";

import { db } from "../../../../firestore/firestore";
import { Task } from "../../models/Task";
import { ICreateTaskDTO, ITaskRepository } from "../ITaskRepository";

class FirestoreTaskRepository implements ITaskRepository {
    private static INSTANCE: FirestoreTaskRepository;

    public static getInstance(): FirestoreTaskRepository {
        if (!FirestoreTaskRepository.INSTANCE) {
            FirestoreTaskRepository.INSTANCE = new FirestoreTaskRepository();
        }

        return FirestoreTaskRepository.INSTANCE;
    }

    async create({
        title,
        description,
        deadline,
    }: ICreateTaskDTO): Promise<void> {
        // const task = new Task();
        // Object.assign(task, {
        //     title,
        //     description,
        //     deadline,
        //     completed: false,
        //     createdAt: new Date(),
        // });

        const task: Task = {
            id: uuid(),
            title,
            description,
            deadline,
            completed: false,
            createdAt: new Date(),
        };

        console.log(task);

        const docRef = db.collection("bpretto").doc(task.id);
        await docRef.set(task);
    }

    list(): Task[] {
        throw new Error("Method not implemented.");
    }
}

export { FirestoreTaskRepository };
