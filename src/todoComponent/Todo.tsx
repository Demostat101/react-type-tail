import { useState } from "react"
import { FaTrash } from "react-icons/fa"
import TodoInput from "./TodoInput"
import Search from "./Search"




const Todo = () => {

    const [addTodo, setAddTodo]= useState("")
    const [search, setSearch] = useState("")
    const [todo, setTodo] = useState([
        {
            id:1,
            task:"Want to play football",
            completed: false
        },
        {
            id:2,
            task:"Want to read",
            completed: false
        },
        {
            id:3,
            task:"Want to sleep",
            completed: false
        }
    ])

    const searchHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{

        setSearch(e.target.value)  
    }

    const addNewData = ()=>{

        if (addTodo === "") {
           return; 
        } else {

            let  addData = {
                id:todo.length+1,
                task:addTodo,
                completed:false
            }
  
            setAddTodo("")
            return setTodo((prev)=>{
                return [...prev, addData]
            })
        }
    }


 

    const handleDelete = (id:number)=>{

        setTodo(todo.filter((item)=> item.id !== id))
        
    }


    
    const handleCheckBox = (id:number)=>{

        const toggleCheckBox = todo.map((item)=> item.id === id ? {...item, completed:!item.completed} : item)
        
        setTodo(toggleCheckBox)
        
    }
    
    
    

  return (
    <ul className=" w-96 flex flex-col place-items-left justify-center ml-10 mt-10  h-full">
        <TodoInput addTodo={addTodo} addNewData={addNewData} setAddTodo={setAddTodo}/>
        <Search searchHandler={searchHandler} search={search}/>
        {
            todo.map((item)=>{
                return <li key={Math.random()} className="flex w-96 justify-between place-items-center ">
                    <div className="flex text-xl font-bold gap-4 h-full pt-3">
                        <input type="checkbox" checked={item.completed} onChange={()=>handleCheckBox(item.id)} className="w-8 h-8 mb-3" /> 
                        {!item.completed === true ?<div >{item.task}</div>: <del>{item.task}</del>}
                    </div>
                    
                    <FaTrash size={20}
                    role="button"
                    onClick={()=> handleDelete(item.id)}
                    
                    />
                </li>
            })

        }
        
    </ul>
  )
}

export default Todo
