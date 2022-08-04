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

    async create({ user_id, task }: ICreateTaskDTO): Promise<void> {
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
            .orderBy("createdAt", "desc")
            .get();
        const tasksArray = [];
        tasks.forEach((doc) => {
            tasksArray.push(doc.data() as Task);
        });
        return tasksArray;
    }

    async update({ user_id, task }: IUpdateTaskDTO): Promise<void> {
        await db
            .collection("users")
            .doc(user_id)
            .collection("tasks")
            .doc(task.id)
            .update({
                title: task.title,
                description: task.description,
                deadline: task.deadline,
            });
    }

    async delete(user_id: string, id: string): Promise<void> {
        await db
            .collection("users")
            .doc(user_id)
            .collection("tasks")
            .doc(id)
            .delete();
    }
}

export { FirestoreTaskRepository };
