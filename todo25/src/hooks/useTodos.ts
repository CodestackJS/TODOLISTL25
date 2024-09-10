import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Todo{
    id : number
    title: string
    completed: boolean
}

const useTodos = () => {
    const fetchTodos = () =>
        axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then(res => (res.data))
        // .catch(error => error)
        return useQuery<Todo[],Error>({
            queryKey: ["todos"],
            queryFn: fetchTodos,
        });

}

export default useTodos;