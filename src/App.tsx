import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserDetails } from "./components/UserDetails";
import { UserList } from "./components/UserList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:userId" element={<UserDetails />} />
    </Routes>
  );
};

export default App;
