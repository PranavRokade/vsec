import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddTodo from "./pages/AddTodo.jsx";

export default function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">My Todos</Link>
        <Link to="/add">Add Todo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </div>
  );
}
