import useTodos from "../hooks/useTodos";

const TodoListWQuery = () => {


    const {data: todos,error,isLoading} = useTodos()
    //cut the buttom part and paste it into the useTodos.ts file
    // useQuery<Todo[],Error>({
    //     queryKey: ["todos"],
    //     queryFn: fetchTodos,
    // });

  return (
    <>
        {isLoading ? <p>Loading......</p> :null}
        {error ? <p>{error.message}:</p> :null}
        {todos?.map(todo => (
            <li key={todo.id}>{todo.title}</li>
        ))}
    
    
    </>
  )
}

export default TodoListWQuery