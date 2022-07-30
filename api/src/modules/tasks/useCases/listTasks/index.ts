import { TaskRepository } from "../../repositories/taskRepository";
import { ListTasksController } from "./ListTasksController";
import { ListTasksUseCase } from "./ListTasksUseCase";

const taskRepository = TaskRepository.getInstance();
const listTaskUseCase = new ListTasksUseCase(taskRepository);
const listTaskController = new ListTasksController(listTaskUseCase);

export { listTaskController };
