import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import AddTodo from "./pages/TambahData";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<AddTodo />} path="tambahdata"></Route>
    </Routes>
  );
};

export default App;
