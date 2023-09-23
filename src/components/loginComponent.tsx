import React, { useMemo, useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserByEmail, getUserInterface } from "../api/firestoreAPI";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const [user, setUserInfo] = useState<getUserInterface>();
  useMemo(() => {
    getUserByEmail(email, setUserInfo);
  }, [email]);
  const login = async () => {
    try {
      const res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
      toast.success("Signed in to LockedIn");
      localStorage.setItem("userEmail", res?.user?.email);
      localStorage.setItem("firstName", user?.firstName ?? "");
      localStorage.setItem("lastName", user?.lastName ?? "");
      localStorage.setItem("alias", user?.alias ?? "");
      localStorage.setItem("id", user?.id ?? "");
      navigate("/home");
    } catch (err) {
      toast.error("Credentials do not exist");
    }
  };
  return (
    <div>
      <div className="flex flex-col space-y-6 mb-8 w-72 text-black">
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
          className="bg-gray-100 text-black p-2 rounded-lg hover:bg-teal-500"
        >
          Log-in
        </button>
        <p className="flex gap-1 justify-center">
          New to LockedIn?{" "}
          <Link to="/register" className="hover:text-teal-500">
            Start here
          </Link>
        </p>
      </div>
    </div>
  );
}
