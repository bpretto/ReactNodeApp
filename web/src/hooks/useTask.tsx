import { useCallback, useState } from "react";
import { ITask } from "../interfaces";
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
        deleteTask
    };

}