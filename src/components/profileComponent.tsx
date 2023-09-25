import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./common/navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { onLogout } from "../api/AuthAPI";
import ProfileCard from "./common/cards/profileCard";
import AchievementsCard from "./common/cards/achievementsCard";
import ExperienceCard from "./common/cards/experienceCard";
import HighlightsCard from "./common/cards/highlightsCard";
import { getUserById, getUserInterface } from "../api/firestoreAPI";
import Loader from "./common/loader";

export default function ProfileComponent() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<getUserInterface>();

  const { id } = useParams();

  useMemo(() => {
    getUserById(id ?? null, setUserDetails);
  }, [id]);

  const firstName = userDetails?.firstName;
  const lastName = userDetails?.lastName;
  const userEmail = userDetails?.email;
  const headline = userDetails?.headline;
  const location = userDetails?.location;
  const alias = userDetails?.alias;

  return userDetails ? (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <ProfileCard
        fName={firstName}
        lName={lastName}
        email={userEmail}
        headline={headline}
        location={location}
        alias={alias}
      />
      <AchievementsCard />
      <ExperienceCard />
      <HighlightsCard />
      <button
        onClick={() => {
          navigate("/login");
          onLogout();
        }}
      >
        LogOut
      </button>
    </div>
  ) : (
    <Loader />
  );
}
