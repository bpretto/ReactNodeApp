import { ICreateTaskDTO, ITask } from '../interfaces';
import { Api } from '../providers/api';

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};

export const getAllTasks = () => Api.get<ITask[]>('/tasks', config);

export const createTask = (task: ICreateTaskDTO) => Api.post('/tasks/create', task, config);

export const updateTask = (task: ITask) => Api.put('/tasks/update', task, config);

export const deleteTask = (id: string) => Api.delete(`/tasks/delete/${id}`,config);

export const TaskService = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};