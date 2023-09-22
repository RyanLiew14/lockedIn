import React, { useState } from "react";
import { SignUpAPI } from "../api/AuthAPI";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { insertUser } from "../api/firestoreAPI";

export interface UserCredentialInterface {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  alias: string | null;
}

export default function RegisterComponent() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<UserCredentialInterface>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    alias: "",
  });
  const signUp = async () => {
    const res = await SignUpAPI(credentials.email, credentials.password);
    await insertUser({
      email: credentials.email,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      alias: credentials.alias,
    });
    toast.success("Signed in to LockedIn");
    console.log(res);
    localStorage.setItem("userEmail", res?.user?.email);
    navigate("/home");
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
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, firstName: event.target.value })
          }
          placeholder="first name"
          className="p-3"
        ></input>
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, lastName: event.target.value })
          }
          placeholder="last name"
          className="p-3"
          type="password"
        ></input>
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, alias: event.target.value })
          }
          placeholder="alias (optional)"
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
