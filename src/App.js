import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./pages/adminpage/admin";
import Login from "./pages/auth/login";
import { useDispatch } from "react-redux";
import { currentUser } from "./core/action/auth";
import Xx from "./xx";
import Pagenotfound from "./pages/404page";
import Privateroute from "./routes/privateroute";
import Userpage from "./pages/userpage/user";
import Test_login from "./pages/test_admin_route/test_login";
import Homepage from "./pages/test_admin_route/homepage";
import UserContext from "./context/userContext";
function App() {
  const [user, setUser] = useState(sessionStorage.user || null);
  const valueUser = { user, setUser };

  // const idtoken = localStorage.token;
  // const dispatch = useDispatch();
  // if (idtoken) {
  //   currentUser(idtoken)
  //     .then((res) => {
  //       dispatch({
  //         type: "LOGIN",
  //         payload: {
  //           token: idtoken,
  //           username: res.data.username,
  //           role: res.data.role,
  //         },
  //       });
  //     })
  //     .catch((err) => {
  //       //err
  //       console.log(err);
  //     });

  return (
    // <Routes>
    //   <Route
    //     path="/admin/index"
    //     element={
    //       <AdminRoute>
    //         <Admin />
    //       </AdminRoute>
    //     }
    //   />
    //   <Route
    //     path="/user/index"
    //     element={
    //       <UserRoute>
    //         <Userpage />
    //       </UserRoute>
    //     }
    //   />
    <UserContext.Provider value={valueUser}>
      <Routes>
        {/* <Route path="/" element={<Privateroute />}>
        <Route path="/admin/index" element={<Admin />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Pagenotfound />} /> */}

        <Route element={<Privateroute />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
        </Route>
        <Route path="/login" element={<Test_login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
