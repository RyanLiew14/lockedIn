import React, { useState } from "react";
import { SignUpAPI } from "../api/AuthAPI";
import { Link } from "react-router-dom";

export default function RegisterComponent() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const signUp = () => {
    const res = SignUpAPI(credentials.email, credentials.password);
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

      <div className="flex flex-col justify-center gap-2">
        <button
          onClick={signUp}
          className="bg-gray-100 text-black p-2 rounded-lg w-72"
        >
          Join
        </button>
        <p>
          Already a member of LockedIn?{" "}
          <Link to="/login" className="hover:text-blue-500">
            Sign in{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
