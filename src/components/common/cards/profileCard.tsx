import React from "react";
import { BiPencil } from "react-icons/bi";

interface ProfileCardProps {
  fName: string | null | undefined;
  lName: string | null | undefined;
  email: string | null | undefined;
}

export default function ProfileCard({ fName, lName, email }: ProfileCardProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="relative flex w-9/12 h-48 bg-white dark:bg-gray-600 items-center mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="absolute right-0 p-3">
          <BiPencil onClick={() => {}} size={30}></BiPencil>
        </div>
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 mt-4">
          <div className="h-full rounded-full overflow-hidden flex items-center justify-center"></div>
        </div>

        <div className="mt-4 font-sans font-semibold">
          {fName} {lName}
          {" | "}
          {email}
        </div>

        <div className="mt-4 font-sans">Bio Placeholder</div>
      </div>
    </div>
  );
}
