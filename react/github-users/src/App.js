import UserListView from "./Components/UserListView/UserListView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import UserDetailsCard from "./Components/UserDetailsCard/UserDetailsCard";
import NotFound from "./Assets/NotFound/NotFound";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserListView />} />
        <Route path="/user-details/:id" element={<UserDetailsCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
