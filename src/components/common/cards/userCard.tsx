import React from "react";
import { AllUserInterface } from "../../../api/firestoreAPI";
import { AiFillCamera } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export default function UserCard({
  id,
  email,
  firstName,
  lastName,
  alias,
  headline,
  imageLink,
  location,
}: AllUserInterface) {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-md">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 mt-4 border-teal-400 p-1">
        <div className="h-full rounded-full overflow-hidden flex items-center justify-center">
          {imageLink ? (
            <img className="object-cover h-36 w-36" src={imageLink} />
          ) : (
            <BsFillPersonFill className="h-12 w-12"></BsFillPersonFill>
          )}
        </div>
      </div>
      <div className="mt-2 font-sans font-semibold">
        {firstName} {alias ? `"${alias}"` : ""} {lastName}
      </div>
      <div className="font-thin text-center text-sm">{headline}</div>
      <button className="bg-teal-500 p-1.5 rounded-md font-extralight mt-2 mb-2">
        Connect +
      </button>
    </div>
  );
}
