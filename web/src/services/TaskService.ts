import { ITask } from '../interfaces';
import { Api } from '../providers/api';

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};

// Axios.post( 
//   'http://localhost:8000/api/v1/get_token_payloads',
//   bodyParameters,
//   config
// ).then(console.log).catch(console.log);

export const getAllTasks = () => Api.get<ITask[]>('/tasks', config);

export const deleteTask = (id: string) => Api.delete(`/tasks/delete/${id}`,config)

export const TaskService = {
    getAllTasks,
    deleteTask
};