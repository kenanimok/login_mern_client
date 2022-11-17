import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/adminpage/admin";
import { Space, Table, Tag } from "antd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
