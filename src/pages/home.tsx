import React, { useEffect, useState } from "react";
import HomeComponent from "../components/homeComponent";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/login");
      } else {
        return setLoading(false);
      }
    });
  }, [navigate]);

  return loading ? <Loader></Loader> : <HomeComponent />;
}
