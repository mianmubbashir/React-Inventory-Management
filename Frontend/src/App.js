import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Sales from "./components/Sales";
import Purchase from "./components/Purchase";
import ManageStore from "./components/ManageStore";
import AuthContext from "./AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {

  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);


  let currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{
    if(currentUser){
      setUser(currentUser._id)
      setLoader(false)
      // console.log(currentUser)
    }
    else{
      setUser("");
      setLoader(false);
    }
  },[currentUser])




  const signin = (newUser, callback) => {
    setUser(newUser);
    callback();

  }

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
  }

  let value = { user, signin, signout };
  // console.log("value",value)



  if (loader)
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>LOADING...</h1>
    </div>
  );
  return (
    <AuthContext.Provider value={value}>
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<ProtectedRoutes><Layout /></ProtectedRoutes>}>
          <Route index element={<Dashboard />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/managestore" element={<ManageStore />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
