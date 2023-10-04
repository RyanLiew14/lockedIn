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
  const achievements = userDetails?.items;
  const imageLink = userDetails?.imageLink;
  const videoArray = userDetails?.videoUrl;

  return userDetails ? (
    <div className="flex flex-col items-center">
      <Navbar></Navbar>
      <ProfileCard
        fName={firstName}
        lName={lastName}
        email={userEmail}
        headline={headline}
        location={location}
        alias={alias}
        imageLink={imageLink}
      />
      <AchievementsCard items={achievements} />
      <ExperienceCard />
      <HighlightsCard videoArray={videoArray} />
      {localStorage.getItem("id") === id && (
        <button
          onClick={() => {
            navigate("/login");
            localStorage.clear();
            onLogout();
          }}
          className="mt-4 w-9/12 bg-white dark:bg-gray-600 p-2 rounded-md hover:bg-teal-500"
        >
          Log Out
        </button>
      )}
    </div>
  ) : (
    <Loader />
  );
}
