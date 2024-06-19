import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Love from "./Love";
import Hate from "./Hate";
// import { useNavigate } from 'react-router-dom'
import Loyalty from "./Loyalty";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // const navigate = useNavigate()

  const Notify = () => {
    if (!isOpen) {
      toast.success("Modal opened Successfull !!!");
    }
    setIsOpen(true);
    // navigate("/love")
  };

  return (
    <div className="relative z-10 min-h-screen">
      <ToastContainer position="bottom-left" theme="dark" autoClose={3000} />

      <Loyalty open={isOpen} close={setIsOpen}>
        <Love close={setIsOpen} open={isOpen} />
      </Loyalty>

      <Routes>
        <Route
          path="/"
          element={<Hate Notify={Notify} close={setIsOpen} open={isOpen} />}
        />
        {/* <Route path='/love' element={<Love/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
