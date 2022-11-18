import { Routes, Route } from "react-router-dom";
import Admin from "./pages/adminpage/admin";
import Login from "./pages/auth/login";
import { useDispatch } from "react-redux";
import { currentUser } from "./core/action/auth";
import UserRoute from "./routes/UserRoute";
import Userpage from "./pages/userpage/user";
import AdminRoute from "./routes/AminRoute";
import Xx from "./xx";
function App() {
  const idtoken = localStorage.token;
  const dispatch = useDispatch();
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: "LOGIN",
          payload: {
            token: idtoken,
            username: res.data.username,
            role: res.data.role,
          },
        });
      })
      .catch((err) => {
        //err
        console.log(err);
      });
  }
  return (
    <Routes>
      <Route path="/" element={<Xx />} />
      <Route
        path="/admin/index"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />
      <Route
        path="/user/index"
        element={
          <UserRoute>
            <Userpage />
          </UserRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
