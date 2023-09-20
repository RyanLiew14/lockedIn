import React, { useState } from "react";
import { LoginAPI, SignUpAPI } from "../api/AuthAPI";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const login = () => {
    const res = LoginAPI(credentials.email, credentials.password);
    console.log(res);
  };

  const signUp = () => {
    const res = SignUpAPI(credentials.email, credentials.password);
    console.log(res);
  };
  return (
    <div>
      <div className="flex flex-col space-y-2 mb-4">
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          placeholder="email"
          className="p-2"
        ></input>
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
          placeholder="password"
          className="p-2"
          type="password"
        ></input>
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={login}
          className="bg-gray-100 text-black p-2 rounded-lg"
        >
          Log-in
        </button>
        <button
          onClick={signUp}
          className="bg-gray-100 text-black p-2 rounded-lg"
        >
          Sign-up
        </button>
      </div>
    </div>
  );
}
