import "./App.css";
import LogIn from "./components/routes/auth/logIn/logIn";
import "antd/dist/antd.css";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<LogIn />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
}

export default App;
