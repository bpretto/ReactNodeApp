import { TaskRepository } from "../../repositories/taskRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const taskRepository = TaskRepository.getInstance();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };
