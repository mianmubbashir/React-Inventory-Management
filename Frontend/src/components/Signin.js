import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

export default function Signin() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const authcontext = useContext(AuthContext);
  const navigate = useNavigate();


  const authCheck = () => {
    setTimeout(() => {
      fetch("http://localhost:4000/api/signin")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          authcontext.signin(data._id, () => {
            navigate("/");
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  };


  const loginUser = () => {
      fetch("http://localhost:4000/api/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(login),
      })
        .then((result) => {
          console.log("User login", result);
        })
        .catch((error) => {
          console.log("Something went wrong ", error);
        });
        authCheck();
  };



  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen items-center place-items-center ">
        <div className="flex justify-center">
          <img
            className="w-100 h-100"
            src={require("../assets/Pic1.jpg")}
            alt="Your Company"
          />
        </div>

        <div className="w-full max-w-md space-y-8 p-10 rounded-lg">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <form
            className="mt-8 space-y-8"
            // action="#"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  value={login.email}
                  onChange={(e) => {
                    setLogin({ ...login, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  value={login.password}
                  onChange={(e) => {
                    setLogin({ ...login, password: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password? &nbsp;<Link to="/signup">Signup</Link>
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={loginUser}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-red-500 group-hover:text-red-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
