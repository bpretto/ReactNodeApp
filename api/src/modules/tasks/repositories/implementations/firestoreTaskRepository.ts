// import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { v4 as uuid } from "uuid";

import { db } from "../../../../firestore/firestore";
import { Task } from "../../models/Task";
import {
    ICreateTaskDTO,
    ITaskRepository,
    IUpdateTaskDTO,
} from "../ITaskRepository";

class FirestoreTaskRepository implements ITaskRepository {
    private static INSTANCE: FirestoreTaskRepository;

    public static getInstance(): FirestoreTaskRepository {
        if (!FirestoreTaskRepository.INSTANCE) {
            FirestoreTaskRepository.INSTANCE = new FirestoreTaskRepository();
        }

        return FirestoreTaskRepository.INSTANCE;
    }

    async create({
        user_id,
        title,
        description,
        deadline,
    }: ICreateTaskDTO): Promise<void> {
        const task: Task = {
            id: uuid(),
            title,
            description,
            deadline,
            createdAt: new Date(),
        };

        await db
            .collection("users")
            .doc(user_id)
            .collection("tasks")
            .doc(task.id)
            .set(task);
    }

    async list(user_id: string): Promise<Task[]> {
        const tasks = await db
            .collection("users")
            .doc(user_id)
            .collection("tasks")
            .get();
        const tasksArray = [];
        tasks.forEach((doc) => {
            tasksArray.push(doc.data() as Task);
        });
        return tasksArray;
    }

    async update({ user_id, task }: IUpdateTaskDTO): Promise<void> {
        db.collection("users")
            .doc(user_id)
            .collection("tasks")
            .doc(task.id)
            .update({
                title: task.title,
                description: task.description,
                deadline: task.deadline,
            });
    }
}

export { FirestoreTaskRepository };
