import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import ApiClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";



// below got transferred to services folder
// const apiClient = new ApiClient<Todo>('todos/')

// export interface Todo{
//     userId: number;
//     id : number;
//     title: string;
//     completed: boolean;
// }
// above got transferred to services folder

// interface TodoQuery {
//     page: number;
//     pageSize: number
// }

const useTodos = () => {
   

    //const fetchTodos = () =>
        //axios
        //.get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
            // params:{
            //     _start:(query.page -1) * query.pageSize,
            //     _limit: query.pageSize
            // }
       // })
       // .then(res => (res.data))
        // .catch(error => error)
        
        return useQuery<Todo[],Error>({
            // queryKey: userId ? ["users", userId, "todos"]:["todos"],
            // queryKey: ["todo",query],
            queryKey: CACHE_KEY_TODOS,
            // queryFn: fetchTodos,
            // queryFn: apiClient.getAll,
            queryFn: todoService.getAll,
            staleTime: 10 * 1000 //stale to 10 sec
        });

}

export default useTodos;