import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Todo{
    userId: number
    id : number
    title: string
    completed: boolean
}

const useTodos = (userId: number | undefined) => {
   

    const fetchTodos = () =>
        axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
            params:{
                userId
            }

        })
        .then(res => (res.data))
        // .catch(error => error)
        
        return useQuery<Todo[],Error>({
            queryKey: userId ? ["users", userId, "todos"]:["todos"],
            queryFn: fetchTodos,
            staleTime: 10 *1000 //stale to 10 sec
        });

}

export default useTodos;