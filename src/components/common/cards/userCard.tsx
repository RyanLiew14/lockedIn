import React from "react";
import {
  AllUserInterface,
  acceptInvite,
  sendConnectionInvite,
} from "../../../api/firestoreAPI";
import { AiFillCamera, AiOutlineClockCircle } from "react-icons/ai";
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
  outgoingInvitation,
  incomingInvitation,
  connections,
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
      <div className="mt-2 font-sans font-semibold text-center">
        {firstName} {alias ? `"${alias}"` : ""} {lastName}
      </div>
      <div className="font-thin text-center text-sm p-2">{headline}</div>

      {connections?.includes(localStorage.getItem("id") ?? "") ? (
        <button
          onClick={() => {
            console.log("send message");
          }}
          className="bg-teal-500 p-1.5 rounded-md font-extralight mt-2 mb-2 hover:bg-teal-700 w-11/12"
        >
          Message
        </button>
      ) : incomingInvitation?.includes(localStorage.getItem("id") ?? "") ? (
        <div className="bg-teal-500 p-1.5 rounded-md font-extralight mt-2 mb-2 w-11/12">
          <span className="flex flex-row items-center justify-center gap-1">
            <AiOutlineClockCircle />
            Pending
          </span>
        </div>
      ) : !outgoingInvitation?.includes(localStorage.getItem("id") ?? "") ? (
        <button
          onClick={() => {
            sendConnectionInvite(localStorage.getItem("id") ?? "", id);
          }}
          className="bg-teal-500 p-1.5 rounded-md font-extralight mt-2 mb-2 hover:bg-teal-700 w-11/12"
        >
          Connect +
        </button>
      ) : (
        <button
          onClick={() => {
            acceptInvite(id, localStorage.getItem("id") ?? "");
          }}
          className="bg-teal-500 p-1.5 rounded-md font-extralight mt-2 mb-2 hover:bg-teal-700 w-11/12"
        >
          Accept
        </button>
      )}
    </div>
  );
}
