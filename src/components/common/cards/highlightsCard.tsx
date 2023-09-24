import React from "react";

export default function HighlightsCard() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 pb-4 bg-white dark:bg-gray-600 items-left mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="mt-4 font-sans font-semibold pl-3 text-lg">
          Achievements
        </div>

        <div className="mt-4 pl-3 font-sans w-full">
          Achievement placeholder
          <div className="flex justify-end pr-3">2023</div>
        </div>
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
  );
}
