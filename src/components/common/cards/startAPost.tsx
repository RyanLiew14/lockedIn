import React, { useState } from "react";
import StartPostModal from "../modal/startPostModal";
import { BsFillPersonFill } from "react-icons/bs";

interface StartPostInterface {
  imageLink: string | null | undefined;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  alias: string | null | undefined;
  email: string | null | undefined;
  headline: string | null | undefined;
}

export default function StartAPost({
  imageLink,
  firstName,
  lastName,
  alias,
  email,
  headline,
}: StartPostInterface) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-row w-9/12 h-24 bg-white dark:bg-gray-600 items-center mt-4 rounded-md px-2 gap-1">
        <div className="rounded-full overflow-hidden border-2 border-teal-500 flex items-center justify-center p">
          {imageLink ? (
            <img className="object-cover h-10 w-12" src={imageLink} />
          ) : (
            <BsFillPersonFill className="h-12 w-12"></BsFillPersonFill>
          )}
        </div>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          className="text-left bg-gray-800 hover:bg-gray-700 h-12 rounded-3xl p-3 w-full"
        >
          Start a post
        </button>

        <StartPostModal
          modalOpenState={modalOpen}
          setModalOpenState={setModalOpen}
          firstName={firstName}
          imageLink={imageLink}
          lastName={lastName}
          email={email}
          alias={alias}
          headline={headline}
        ></StartPostModal>
      </div>
    </div>
  );
}
