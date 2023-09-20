import React from "react";
import RegisterComponent from "../components/registerComponent";

export default function Register() {
  return (
    <div className="flex-col space-y-12 mt-64">
      <h1 className="text-center text-4xl font-semibold font-sans">
        Turn your dream into a reality
      </h1>
      <div className="flex justify-center font-sans">
        <RegisterComponent />
      </div>
    </div>
  );
}
