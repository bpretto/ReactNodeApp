// import { addDoc, collection, doc, getDocs } from "firebase/firestore";
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
        const task: Task = {
            id: uuid(),
            title,
            description,
            deadline,
            completed: false,
            createdAt: new Date(),
        };

        await db
            .collection("users")
            .doc("bpretto")
            .collection("tasks")
            .doc(task.id)
            .set(task);

        // try {
        //     const docRef = await addDoc(collection(db, "tasks"), task);
        //     console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }
    }

    async list(): Promise<Task[]> {
        const tasks = await db
            .collection("users")
            .doc("bpretto")
            .collection("tasks")
            .get();
        const tasksArray = [];
        tasks.forEach((doc) => {
            tasksArray.push(doc.data() as Task);
        });
        // const querySnapshot = await getDocs(collection(db, "bpretto"));
        // querySnapshot.forEach((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
        // });
        return tasksArray;
    }
}

export { FirestoreTaskRepository };
