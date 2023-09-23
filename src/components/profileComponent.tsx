import React, { useState } from "react";
import Navbar from "./common/navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { onLogout } from "../api/AuthAPI";

export default function ProfileComponent() {
  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState<string | null>("");
  // const [lastName, setLastName] = useState<string | null>("");
  // const [email, setEmail] = useState<string | null>("");

  const { id } = useParams();
  let firstName;
  let lastName;
  let userEmail;

  if (id === localStorage.getItem("id")) {
    firstName = localStorage.getItem("firstName");
    lastName = localStorage.getItem("lastName");
    userEmail = localStorage.getItem("userEmail");
  } else {
    //TODO: query db by id and get user by ID
  }

  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <>
        {firstName} , {lastName} , {userEmail}
      </>
      <button
        onClick={() => {
          navigate("/login");
          onLogout();
        }}
      >
        LogOut
      </button>
    </div>
  );
}
