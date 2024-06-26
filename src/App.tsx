import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Love from "./Love";
import Hate from "./Hate";
import Loyalty from "./Loyalty";
import { useState } from "react";
import Todo from "./todoComponent/Todo";



function App() {
  const [isOpen, setIsOpen] = useState(false);


  const Notify = () => {
    if (!isOpen) {
      toast.success("Modal opened Successfull !!!");
    }
    setIsOpen(true);
  };
  const closeModal = () => {
    if (isOpen) {
      toast.success("Modal closed Successfull !!!");
    }
    setIsOpen(false);
  };

  return (
    <div className="relative z-10 min-h-screen">
      <ToastContainer position="bottom-left" theme="dark" autoClose={3000} />

      <Loyalty open={isOpen} close={setIsOpen}>
        <Love closeModal={closeModal}  />
      </Loyalty>

      <Routes>
        <Route
          path="/"
          element={<Hate Notify={Notify} close={setIsOpen} open={isOpen} />}
        />
        {/* <Route path='/love' element={<Love/>} /> */}
      </Routes>
      <Todo/>
    </div>
  );
}

export default App;
