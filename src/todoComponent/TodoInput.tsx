

interface Props {
    addTodo:string,
    addNewData:React.MouseEventHandler<HTMLButtonElement>,
    setAddTodo:React.Dispatch<React.SetStateAction<string>>
    inputRef: React.LegacyRef<HTMLInputElement>
}

const TodoInput = ({addTodo,addNewData,setAddTodo,inputRef}:Props) => {

  return (
    <form onSubmit={(e)=> e.preventDefault()}>

        <input className="border-solid border-2 border-blue-500 p-1" autoFocus ref={inputRef} type="text" value={addTodo} placeholder="Enter todo here" onChange={(e)=> setAddTodo(e.target.value)} />
        <button onClick={addNewData} className="bg-blue-400 text-white font-bold ml-3 p-1">Add Todo</button>
        {/* {addTodo==="" && <div>Please enter your todo</div>} */}
        
      
    </form>
  )
}

export default TodoInput
