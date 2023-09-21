import React, { useState } from "react";
import { Button, Modal } from "antd";
import StartPostModal from "../modal/startPostModal";

export default function StartAPost() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 h-24 border-slate-300 border-2 bg-slate-500 items-center mt-4 flex-col rounded-md px-24">
        <button
          onClick={() => {
            setModalOpen(true);
            console.log(modalOpen);
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
