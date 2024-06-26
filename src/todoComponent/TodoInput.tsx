interface Props {
    addTodo:string,
    addNewData:React.MouseEventHandler<HTMLButtonElement>,
    setAddTodo:React.Dispatch<React.SetStateAction<string>>
}

const TodoInput = ({addTodo,addNewData,setAddTodo}:Props) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>

        <input className="border-solid border-2 border-blue-500 p-1" type="text" value={addTodo} placeholder="Enter todo here" onChange={(e)=> setAddTodo(e.target.value)} />
        <button onClick={addNewData} className="bg-blue-400 text-white font-bold ml-3 p-1">Add Todo</button>
      
    </form>
  )
}

export default TodoInput
