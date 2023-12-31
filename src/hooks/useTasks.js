import {useMutation, useQuery, useQueryClient} from "react-query";
import {TaskActions} from "../dataActions/Tasks";

export const useTasks = () => {
    const {data} = useQuery({
        queryFn: () => {
            return TaskActions.getValue()
        },
        queryKey: 'tasks'
    })
    return {
        data
    };
}
export const useAddNewTasks = () => {
    const {data} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (title) => {
            if (Array.isArray(data)){
                const task = {
                    title,
                    isDone: false,
                    id: Date.now()
                };
                const newData = data.concat([task])
                TaskActions.saveValue(newData)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });
    return {
        addNewTask: mutate
    }
}

export const useDeleteTasks = () => {
    const {data} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (id) => {
            if (Array.isArray(data)){
                const newData = data.filter(task => task.id !== id);
                return TaskActions.saveValue(newData);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });
    return {
        deleteTask: mutate
    }
}

export const useUpdateTasks = () => {
    const {data} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (id,title) => {
            if (Array.isArray(data)){
                const newData = data.map(task => {
                    if (task.id === id) {
                        return {
                            title,
                            isDone: true,
                            id: Date.now()
                        };
                    }
                    console.log('task',task)
                    return task;
                });
                return TaskActions.saveValue(newData)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });
    return {
        updateTask: mutate
    }
}