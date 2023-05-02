import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

function Sidebar() {
  const authContext = useContext(AuthContext);

  const logoutUser = () => {
    authContext.signout();
  };

  return (
    <div className="flex h-screen flex-col justify-between border-r bg-white">
      <div className="px-4 py-6">
        <nav aria-label="Main Nav" className="mt-2 flex flex-col space-y-1">


        <nav href="/" className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/dashboard.png")}
                alt="Your Company"
              />
              <span className="text-sm font-semibold">

                <Link to="/">Dashboard</Link>
              </span>
            </div>
          </nav>

          <nav href="/inventory" className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/inventory.png")}
                alt="Your Company"
              />
              <span className="text-sm font-semibold">

                <Link to="/inventory">Inventory</Link>
              </span>
            </div>
          </nav>


          <nav href="/Sales" className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/sales.png")}
                alt="Your Company"
              />
              <span className="text-sm font-semibold">
                <Link to="/Sales">Sales</Link>
              </span>
            </div>
          </nav>

          <nav href="/Purchase" className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/inventory.png")}
                alt="Your Company"
              />
              <span className="text-sm font-semibold ">
                <Link to="/Purchase">Purchase</Link>
              </span>
            </div>
          </nav>

          <nav href="/managestore" className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/location.png")}
                alt="Your Company"
              />
              <span className="text-sm font-semibold">
                <Link to="/managestore">Manage Store</Link>
              </span>
            </div>
          </nav>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div className="flex items-center px-9">

              <span className="text-sm font-semibold" onClick={logoutUser}>
                Logout
              </span>
              
            </div>
          </summary>
        </details>
      </div>
    </div>
  );
}

export default Sidebar;
