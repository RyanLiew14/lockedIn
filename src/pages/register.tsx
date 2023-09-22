import React from "react";
import RegisterComponent from "../components/registerComponent";
import { ToastContainer } from "react-toastify";

export default function Register() {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 h-screen items-center justify-center">
      <ToastContainer></ToastContainer>
      <div className="flex-col space-y-12">
        <h1 className="text-center text-4xl font-semibold font-sans">
          Turn your dream into a reality
        </h1>
        <div className="flex justify-center font-sans">
          <RegisterComponent />
        </div>
      </div>
    </div>
  );
}
