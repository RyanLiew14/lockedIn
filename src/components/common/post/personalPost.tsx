import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function PersonalPost() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 h-48 bg-white dark:bg-gray-600 items-center mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 mt-4">
          <div className="h-full rounded-full overflow-hidden flex items-center justify-center">
            <BsFillPersonFill size={96}></BsFillPersonFill>
          </div>
        </div>

        <div className="mt-4 font-sans font-semibold">
          Ryan Liew placeholder
        </div>

        <div className="mt-4 font-sans">Bio Placeholder</div>
      </div>
    </div>
  );
}
