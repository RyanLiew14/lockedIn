import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import EditProfileModal from "../modal/editProfileModal";
import ProfileImageModal from "../modal/profileImageModal";

interface ProfileCardProps {
  fName: string | null | undefined;
  lName: string | null | undefined;
  email: string | null | undefined;
  alias: string | null | undefined;
  location: string | null | undefined;
  headline: string | null | undefined;
  imageLink: string | null | undefined;
}

export default function ProfileCard({
  fName,
  lName,
  email,
  alias,
  location,
  headline,
  imageLink,
}: ProfileCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [aliasState, setAliasState] = useState(alias);
  const [firstName, setFirstName] = useState(fName);
  const [lastName, setLastName] = useState(lName);
  const [userEmail, setUserEmail] = useState(email);
  const [headlineState, setHeadlineState] = useState(headline);
  const [locationState, setLocationState] = useState(location);
  const [profileImageModalOpen, setProfileImageModalOpen] = useState(false);
  const [imageLinkState, setImageLinkState] = useState(imageLink);
  const [profileImage, setProfileImage] = useState(null);
  return (
    <div className="flex w-full justify-center">
      <ProfileImageModal
        modalOpenState={profileImageModalOpen}
        setModalOpenState={setProfileImageModalOpen}
      />
      <div className="space-y-2 pb-4 relative flex w-9/12 bg-white dark:bg-gray-600 items-start pl-3 mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="absolute right-0 p-3 cursor-pointer">
          <BiPencil
            onClick={() => {
              setModalOpen(true);
            }}
            size={30}
          ></BiPencil>
        </div>
        <div
          onClick={() => {
            setProfileImageModalOpen(true);
          }}
          className="cursor-pointer relative w-36 h-36 rounded-full overflow-hidden border-2 mt-4"
        >
          <div className="h-full rounded-full overflow-hidden flex items-center justify-center"></div>
        </div>

        <div className="mt-4 text-lg font-sans font-semibold">
          {firstName} {alias ? `"${alias}"` : ""} {lastName}
          {" | "}
          {userEmail}
        </div>

        <div className="font-thin">{headlineState}</div>
        <div className="font-extralight text-sm">{locationState}</div>
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
