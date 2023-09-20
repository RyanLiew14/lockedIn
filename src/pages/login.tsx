import React from "react";
import LoginComponent from "../components/loginComponent";

export default function Login() {
  return (
    <div className="flex-col space-y-12 mt-64">
      <h1 className="text-center text-6xl font-semibold font-sans">LockedIn</h1>
      <h2 className="text-center text-3xl font-medium font-sans">
        Ready to take your game to the next level?
      </h2>
      <div className="flex justify-center font-sans">
        <LoginComponent />
      </div>
    </div>
  );
}
