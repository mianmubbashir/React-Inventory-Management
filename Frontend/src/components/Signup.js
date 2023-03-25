import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
})

const navigate = useNavigate();

// const notifyWarn = () => toast.warning("User already exist or something went wrong", { position: toast.POSITION.TOP_CENTER });


const registerUser = (e) => {

    // Cannot send empty data
    if (userDetails.username === "" || userDetails.email === "" || userDetails.password === "") {
        alert("To register user, fill details please!")
    }
    else {
        fetch("http://localhost:4000/api/signup", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        }).then((result) => {
            alert("Successfully Signup")
            navigate('/signin');
        })
            .catch((error) => {
                // notifyWarn();
                console.log("Something went wrong ", error);
            })


    }
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen items-center place-items-center ">
      <div className="flex justify-center">
            <img
              className="w-100 h-100"
              width={720}
              src={require("../assets/Pic1.jpg")}
              alt="Your Company"
            />
        </div>
       <div className="w-full max-w-md space-y-8 p-10 rounded-lg">
            <h2 
            className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
            >
              Sign up to your account
            </h2>
          <form className="mt-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm ">
            <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                 className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                  placeholder="Username"
                  value={userDetails.username} onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}
                />
              </div>
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
                 className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                  placeholder="Email address"
                  value={userDetails.email} onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
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
                 className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                  placeholder="Password"
                  value={userDetails.password} onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account? Login
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={registerUser}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}
