import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

function Sidebar() {
  const authContext = useContext(AuthContext);
  // console.log("AUTHCONTEXT: ", authContext);

  const logoutUser = () => {
    authContext.signout();
  };

  return (
    <div class="flex h-screen flex-col justify-between border-r bg-white">
      <div class="px-4 py-6">
        <nav aria-label="Main Nav" class="mt-2 flex flex-col space-y-1">
          <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div class="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/dashboard.png")}
                alt="Your Company"
              />
              <span class="text-sm font-medium">
                <Link to="/">Dashboard</Link>
              </span>
            </div>
          </summary>

          <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div class="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/inventory.png")}
                alt="Your Company"
              />
              <span class="text-sm font-medium">
                <Link to="/Inventory">Inventory</Link>
              </span>
            </div>
          </summary>

          <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div class="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/sales.png")}
                alt="Your Company"
              />
              <span class="text-sm font-medium">
                <Link to="/Sales">Sales</Link>
              </span>
            </div>
          </summary>

          <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div class="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/inventory.png")}
                alt="Your Company"
              />
              <span class="text-sm font-medium ">
                <Link to="/Purchase">Purchase</Link>
              </span>
            </div>
          </summary>

          <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div class="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={require("../assets/location.png")}
                alt="Your Company"
              />
              <span class="text-sm font-medium">
                <Link to="/managestore">Manage Store</Link>
              </span>
            </div>
          </summary>
        </nav>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span class="text-sm font-medium" onClick={logoutUser}>
                Logout
              </span>
            </div>

            <span class="shrink-0 transition duration-300 group-open:-rotate-180"></span>
          </summary>
        </details>
      </div>
    </div>
  );
}

export default Sidebar;
