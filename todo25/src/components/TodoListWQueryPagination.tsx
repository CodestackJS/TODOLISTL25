import { useState } from "react";
import useTodos from "../hooks/useTodos";

const TodoListWQueryPagination = () => {

  const pageSize = 10;

    const [userId, setUserid] = useState<number>()
    const [page, setPage] = useState(1)
  
    const {data: todos,error,isLoading} = useTodos({page,pageSize})
    //cut the buttom part and paste it into the useTodos.ts file
    // useQuery<Todo[],Error>({
    //     queryKey: ["todos"],
    //     queryFn: fetchTodos,
    // });

  return (
    <>
        {isLoading ? <p>Loading......</p> :null}
        {error ? <p>{error.message}:</p> :null}
        {/* <select value={userId}  className="form-select m-3" onChange={(e) => setUserid(parseInt(e.target.value))}>
          <option value={""}></option>
          <option value={"1"}>User 1</option>
          <option value={"2"}>User 2</option>
          <option value={"3"}>User 3</option>
          
        </select> */}

        <ul data-bs-theme="dark" className="list-group"> 
        {todos?.map((todo) => (
            <li className="list-group-item" key={todo.id}>{todo.title}</li>
        ))}
        </ul>

        <button className="btn btn-primary m-3 ms-2" onClick={() => setPage(page -1)}>
          Previous
        </button>
        <button className="btn btn-primary m-3 ms-2" onClick={() => setPage(page +1)}>
          Next
        </button>
    
    
    </>
  )
}

export default TodoListWQueryPagination;