import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import TodoInput from "./TodoInput";
import Search from "./Search";
import { useRef } from "react";
import apiRequest from "../ApiRequest";

const Todo = () => {
  const API_URL = "http://localhost:4000/Items";

  const [addTodo, setAddTodo] = useState("");
  const [search, setSearch] = useState("");
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [activeTask, setActiveTask] = useState(0);
  const inputRef = useRef();

  const restApi = async () => {
    try {
      const data = await fetch(API_URL);
      if (!data.ok) {
        throw new Error("Did not receive the correct data");
      } else {
        setIsLoading(true);
      }
      const response = await data.json();
      setTodo(response);
      setError(null);

      return response;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      restApi();
    }, 3000);
  }, []);

  const addNewData = async () => {
    if (addTodo === "") {
      return;
    } else {
      let addData = {
        id: (todo.length ? todo.length + 1 : 1).toString(),
        task: addTodo,
        completed: false,
      };
      //to clear input field
      setAddTodo("");
      //to set focus on input field
      inputRef.current.focus();

      //to add task to database
      const postOption = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addData),
      };

      const result = await apiRequest(API_URL, postOption);

      if (result) {
        setError(result);
      }

      return setTodo((prev) => {
        return [...prev, addData];
      });
    }
  };

  // COMPLETED TASKS

  let arr:[] = [];

  useEffect(() => {
    todo.map((val) => {
      val.completed
        ? setCompleted(arr.push(val.completed))
        : setCompleted(arr.length);
    });
  }, [todo]);

 
  

  /// ACTIVE TASK

  let arr1:[] = [];

  useEffect(() => {
    todo.map((val) => {
      !val.completed
        ? setActiveTask(arr1.push(!val.completed))
        : setActiveTask(arr1.length);
    });
  }, [todo]);


  //to filter by task in the search input
  const loadSearch = todo.filter(
    (item) => item.task.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  const handleDelete = async (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));

    const deleteOptions = {
      method: "DELETE",
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) {
      setError(result);
    }
  };

  const handleCheckBox = async (id: number) => {
    const toggleCheckBox = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setTodo(toggleCheckBox);

    //to update task

    const myItem = toggleCheckBox.filter((item) => item.id === id);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ completed: myItem[0].completed }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) {
      setError(result);
    }
  };

  return (
    <ul className=" w-96 flex flex-col place-items-left justify-center ml-10 mt-10  h-full">
      <TodoInput
        addTodo={addTodo}
        addNewData={addNewData}
        setAddTodo={setAddTodo}
        inputRef={inputRef}
      />
      <Search searchHandler={searchHandler} search={search} />
      <div className="text-red-700"> {error ? ` Error: ${error}` : ""}</div>

      {!isLoading ? <div className="loader mt-24 ml-10"></div> : ""}
      <div className="flex flex-col w-full h-full place-items-center justify-center ">
        {loadSearch.map((item) => {
          return (
            <li
              key={Math.random()}
              className="flex w-full h-10 justify-center place-items-center m-2"
            >
              <div className="flex text-sm font-bold gap-4 w-full h-full pt-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckBox(item.id)}
                  className="w-5 h-5 mb-3"
                />
                <div>
                  {!item.completed === true ? (
                    <div className=" w-full h-full">{item.task}</div>
                  ) : (
                    <del
                      className=" w-full h-full text-center"
                      style={{ opacity: "0.4" }}
                    >
                      {item.task}
                    </del>
                  )}
                </div>
              </div>

              <FaTrash
                size={20}
                role="button"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </div>
      <div>
        {<div>Active Task: {activeTask}</div>}
        {<div>Completed Task: {completed}</div>}
      </div>
    </ul>
  );
};

export default Todo;
