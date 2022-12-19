import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./pages/adminpage/admin";
import Login from "./pages/auth/login";
import Userpage from "./pages/userpage/user";
import AdminRoute from "./routes/AminRoute";
import ProtectedRoute from "./routes/proteced.route";
import Corelayout from "./components/Layout/corelayout";
import Dashboard from "./pages/dashboard/dashboard";
import Reporthuman from "./pages/report/reporthuman";
import Register from "./pages/register/register";
import Notfound from "./pages/404/notfound";
import { TodoProvider } from "./core/context";
import "./main.css";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Notfound />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Corelayout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          {/* <Route path="/" element={<Dashboard />} /> */}

          <Route
            path="/admin/index"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route path="/user" element={<Userpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Reporthuman />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
