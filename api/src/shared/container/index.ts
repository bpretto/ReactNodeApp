import { container } from "tsyringe";

import { FirestoreTaskRepository } from "../../modules/tasks/repositories/implementations/firestoreTaskRepository";
import { ITaskRepository } from "../../modules/tasks/repositories/ITaskRepository";
import { FirestoreUserRepository } from "../../modules/users/repositories/implementations/firestoreUserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<ITaskRepository>(
    "TaskRepository",
    FirestoreTaskRepository
);

container.registerSingleton<IUserRepository>(
    "UserRepository",
    FirestoreUserRepository
);
