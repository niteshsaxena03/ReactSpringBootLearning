import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { Todos } from "./Todos";
import { Logout } from "./Logout";
import { Error } from "./Error";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Todo = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome/:username" element={<Welcome />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
