import React, { useState } from "react";
import StartPostModal from "../modal/startPostModal";

export default function StartAPost() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 h-24 bg-white dark:bg-gray-600 items-center mt-4 flex-col rounded-md px-24">
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          className="text-left bg-gray-800 hover:bg-gray-700 h-12 rounded-3xl p-3 mt-2 w-full"
        >
          Start a post
        </button>

        <StartPostModal
          modalOpenState={modalOpen}
          setModalOpenState={setModalOpen}
        ></StartPostModal>
      </div>
    </div>
  );
}
