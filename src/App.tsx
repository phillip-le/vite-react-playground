import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserDetails } from "./components/UserDetails";
import { UserList } from "./components/UserList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="vite-react-playground">
          <Route index element={<UserList />} />
          <Route path="user/:userId" element={<UserDetails />} />
        </Route>
      </Routes>
      <br />
      <p>
        Powered by{" "}
        <a href="https://jsonplaceholder.typicode.com">JSONPlaceholder</a>
        {" ❤️"}
      </p>
    </div>
  );
};

export default App;
