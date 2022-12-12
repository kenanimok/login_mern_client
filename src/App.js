import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./pages/adminpage/admin";
import Login from "./pages/auth/login";
import { useDispatch } from "react-redux";
import { currentUser } from "./core/action/auth";
import UserRoute from "./routes/UserRoute";
import Userpage from "./pages/userpage/user";
import AdminRoute from "./routes/AminRoute";
import Xx from "./xx";
import Sidebar from "./components/Layout/sidebar/sidebar";
import ProtectedRoute from "./routes/proteced.route";
import Corelayout from "./components/Layout/corelayout";
import Dashboard from "./pages/dashboard/dashboard";
import "./main.css";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      //protect
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Corelayout />}>
          <Route path="/" element={<Navigate to="/admin/index" />} />
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
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
