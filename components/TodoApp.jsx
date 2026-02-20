import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { Error } from "./Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Todo = () => {
  return (
    <BrowserRouter>
      <div className="TodoApp">
        Todo management app
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome/:username" element={<Welcome />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Welcome/> */}
      </div>
    </BrowserRouter>
  );
};
