import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Sales from "./components/Sales";
import Reports from "./components/Reports";
import Orders from "./components/Orders";
import ManageStore from "./components/ManageStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='inventory'element={<Inventory />} />
          <Route path="sales" element={<Sales />} />
          <Route path="reports" element={<Reports />} />
          <Route path="orders" element={<Orders />} />
          <Route path="managestore" element={<ManageStore />} />
        </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
