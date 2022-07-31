import { container } from "tsyringe";

import { FirestoreTaskRepository } from "../../modules/tasks/repositories/implementations/firestoreTaskRepository";
import { ITaskRepository } from "../../modules/tasks/repositories/ITaskRepository";

container.registerSingleton<ITaskRepository>(
    "TaskRepository",
    FirestoreTaskRepository
);
