import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import { Link } from "react-router-dom";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const login = () => {
    const res = LoginAPI(credentials.email, credentials.password);
    console.log(res);
  };
  return (
    <div>
      <div className="flex flex-col space-y-6 mb-8 w-72">
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          placeholder="email"
          className="p-3"
        ></input>
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
          placeholder="password"
          className="p-3"
          type="password"
        ></input>
      </div>

      <div className="flex flex-col justify-center gap-2 w-72">
        <button
          onClick={login}
          className="bg-gray-100 text-black p-2 rounded-lg"
        >
          Log-in
        </button>
        <p className="flex gap-1 justify-center">
          New to LockedIn?{" "}
          <Link to="/register" className="hover:text-blue-500">
            Start here
          </Link>
        </p>
      </div>
    </div>
  );
}
