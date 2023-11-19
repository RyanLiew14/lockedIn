import { useEffect, useState } from "react";
import LoginComponent from "../components/loginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/loader";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="flex bg-gray-100 dark:bg-gray-900 h-screen items-center justify-center">
      <div className="flex-col space-y-12 ">
        <h1 className="text-center text-6xl font-semibold font-sans">
          LockedIn
        </h1>
        <h2 className="text-center text-3xl font-medium font-sans">
          Ready to take your game to the next level?
        </h2>
        <div className="flex justify-center font-sans">
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}
