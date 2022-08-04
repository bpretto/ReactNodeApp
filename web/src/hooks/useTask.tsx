import { useCallback, useState } from "react";
import { ICreateTaskDTO, ITask } from "../interfaces";
import { TaskService } from "../services/TaskService";


export const useTask = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    
    const getAllTasks = useCallback(async () => {
        const { status, data } = await TaskService.getAllTasks();    
        if (status !== 200) {
            throw new Error();
        }
        setTasks(data);
    }, []);
    
    const createTask = useCallback(async (task: ICreateTaskDTO) => {
        const { status } = await TaskService.createTask(task);
        if (status !== 201) {
            throw new Error();
        }
        getAllTasks();
    }, [getAllTasks]);

    const updateTask = useCallback(async (task: ITask) => {
        const { status } = await TaskService.updateTask(task);
        if (status !== 200) {
            throw new Error();
        }
        getAllTasks();
    }, [getAllTasks]);
    
    const deleteTask = useCallback(async (id: string) => {
        const { status } = await TaskService.deleteTask(id);
        if (status !== 200) {
            throw new Error();
        }
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }, [tasks]);

    return {
        tasks,
        getAllTasks,
        createTask,
        updateTask,
        deleteTask
    };

}