import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import EditProfileModal from "../modal/editProfileModal";

interface ProfileCardProps {
  fName: string | null | undefined;
  lName: string | null | undefined;
  email: string | null | undefined;
}

export default function ProfileCard({ fName, lName, email }: ProfileCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [alias, setAlias] = useState("");
  const [firstName, setFirstName] = useState(fName);
  const [lastName, setLastName] = useState(lName);
  const [userEmail, setUserEmail] = useState(email);
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="flex w-full justify-center">
      <div className="relative flex w-9/12 bg-white dark:bg-gray-600 items-center mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="absolute right-0 p-3 cursor-pointer">
          <BiPencil
            onClick={() => {
              setModalOpen(true);
            }}
            size={30}
          ></BiPencil>
        </div>
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 mt-4">
          <div className="h-full rounded-full overflow-hidden flex items-center justify-center"></div>
        </div>

        <div className="mt-4 font-sans font-semibold">
          {firstName} {lastName}
          {" | "}
          {userEmail}
        </div>

        <div>alias: {alias}</div>
        <div>headline: {headline}</div>
        <div>location: {location}</div>

        <div className="mt-4 font-sans">Bio Placeholder</div>
      </div>

      <EditProfileModal
        modalOpenState={modalOpen}
        setModalOpenState={setModalOpen}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        alias={alias}
        setAlias={setAlias}
        headline={headline}
        setHeadline={setHeadline}
        email={userEmail}
        setEmail={setUserEmail}
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
}
