import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodosInf";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import ApiClient from "../services/apiClient";
import apiClient from "../services/apiClient";


interface AddTodoContext {
    previousTodos: Todo[]
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo,Error,Todo>({
        //  mutationFn: (todo: Todo) => 
         mutationFn: apiClient.post, 
             
            //  axios
            //  .post<Todo>("https://jsonplaceholder.typicode.com/todos/",todo)
            //  .then(res => res.data),

             onMutate: (newTodo: Todo) =>{
                const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || []

                queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
                    newTodo, ...(todos || []),
                ]);
                onAdd();
                return {previousTodos}
             },

             onSuccess:(saveTodo,newTodo) => {
                 console.log(saveTodo)

                 //Invalidate the cache
                 //will not show because jsonplaceholder is a fake api
                 // queryClient.invalidateQueries({
                 //     queryKey: ['todos']
                 // })
                 queryClient.setQueryData<Todo[]>(['todos'],(todos) => todos?.map((todo) =>(todo ===newTodo ? saveTodo: todo)))
             },
             onError: () => {
                 console.log("Custom error message");
                 
             },

             
         });

}

export default useAddTodo;