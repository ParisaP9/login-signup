import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./components/logIn";
import SignUp from "./components/signUp";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LogIn />} path="/" />
        <Route element={<Navigate to="/" />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
