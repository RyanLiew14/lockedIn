import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AddHighlightsModals from "../modal/addHighlightsModals";

interface HighlightsCardInterface {
  videoArray: string[] | null | undefined;
}

export default function HighlightsCard({
  videoArray,
}: HighlightsCardInterface) {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState([""]);
  console.log(videoUrl);
  console.log(videoArray);

  return (
    <div className="flex w-full justify-center">
      <AddHighlightsModals
        modalOpenState={modalOpen}
        setModalOpenState={setModalOpen}
        setVideoUrl={setVideoUrl}
        videoUrl={videoUrl}
        videoArray={videoArray}
      />
      <div className="relative flex w-9/12 pb-4 bg-white dark:bg-gray-600 items-left mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="absolute right-0 p-3 cursor-pointer">
          <AiFillPlusCircle
            onClick={() => {
              setModalOpen(true);
            }}
            size={30}
          ></AiFillPlusCircle>
        </div>
        <div className="mt-4 font-sans font-semibold pl-3 text-lg">
          Highlights
        </div>

        <div className="grid grid-cols-4 gap-2">
          {videoArray?.map((video) => (
            <video src={video} controls />
          ))}
          <div className="mt-4 pl-3 font-sans w-full">
            Achievement placeholder 2
            <div className="flex justify-end pr-3">2023</div>
          </div>
          <div className="mt-4 pl-3 font-sans w-full">
            Achievement placeholder 3
            <div className="flex justify-end pr-3">2023</div>
          </div>
          <div className="mt-4 pl-3 font-sans w-full">
            Achievement placeholder 4
            <div className="flex justify-end pr-3">2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}
