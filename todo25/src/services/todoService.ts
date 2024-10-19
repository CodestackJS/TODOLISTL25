import ApiClient from "./apiClient";




export interface Todo{
    userId: number;
    id : number;
    title: string;
    completed: boolean;
}

export const apiClient = new ApiClient<Todo>('todos/')