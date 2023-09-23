import React from "react";
import { onLogout } from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      P
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
