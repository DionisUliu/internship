import "./App.css";
import LogIn from "./components/routes/auth/logIn/LogIn";
import AppView from "./components/routes/appView/AppView";
import "antd/dist/antd.css";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<LogIn />} />
        <Route path="/app" element={<AppView />}>
          <Route path="dashboard" element={<p>Hello Dashboard</p>} />
          <Route path="settings" element={<p>Hello Settings</p>} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
}

export default App;
