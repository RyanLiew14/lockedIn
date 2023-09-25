import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import EditProfileModal from "../modal/editProfileModal";

interface ProfileCardProps {
  fName: string | null | undefined;
  lName: string | null | undefined;
  email: string | null | undefined;
  alias: string | null | undefined;
  location: string | null | undefined;
  headline: string | null | undefined;
}

export default function ProfileCard({
  fName,
  lName,
  email,
  alias,
  location,
  headline,
}: ProfileCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [aliasState, setAliasState] = useState(alias);
  const [firstName, setFirstName] = useState(fName);
  const [lastName, setLastName] = useState(lName);
  const [userEmail, setUserEmail] = useState(email);
  const [headlineState, setHeadlineState] = useState(headline);
  const [locationState, setLocationState] = useState(location);
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

        <div>alias: {aliasState}</div>
        <div>headline: {headlineState}</div>
        <div>location: {locationState}</div>

        <div className="mt-4 font-sans">Bio Placeholder</div>
      </div>

      <EditProfileModal
        modalOpenState={modalOpen}
        setModalOpenState={setModalOpen}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        alias={aliasState}
        setAlias={setAliasState}
        headline={headlineState}
        setHeadline={setHeadlineState}
        email={userEmail}
        setEmail={setUserEmail}
        location={locationState}
        setLocation={setLocationState}
      />
    </div>
  );
}
