import React from "react";
import { useState } from "react";
interface Props {
  Notify: React.MouseEventHandler<HTMLButtonElement>;
  open: Boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hate = ({ Notify }: Props) => {
  const [color, setColor] = useState("red");

  return (
    <div className="flex justify-between">
      <h1 className=" fixed z-auto w-52  h-52 border-solid border-2 shadow-md flex justify-center place-items-center m-20 text-pink-600 font-bold flex-col right-8">
        REACT TOAST
        <button
          className=" bg-blue-500 py-1 px-3 mt-2 text-white"
          onClick={Notify}
        >
          Open Modal
          {/* <ToastContainer position="bottom-left" theme="dark" autoClose={3000}/> */}
        </button>
      </h1>
      
      <form action="">
        <div
          className="w-52 h-52 border-solid border-2 text-white font-bold flex justify-center place-items-center "
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
        <input
          type="text"
          placeholder="type color name here"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Hate;
