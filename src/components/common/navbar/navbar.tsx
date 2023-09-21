import React from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillMessage,
  AiFillBell,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex flex-row bg-blue-950 p-3 gap-12 items-center">
      <AiFillLinkedin size={40}></AiFillLinkedin>
      <div className="flex flex-row gap-4 items-center">
        <AiOutlineSearch size={25}></AiOutlineSearch>
        <input
          className="p-1 w-48 lg:flex hidden rounded-md"
          placeholder="search"
        ></input>
      </div>

      <div className="flex flex-col items-center hover:text-gray-400 cursor-pointer">
        <AiFillHome size={25}></AiFillHome>
        <div className="text-xs">Home</div>
      </div>

      <div className="flex flex-col items-center hover:text-gray-400 cursor-pointer">
        <BsFillPeopleFill size={25}></BsFillPeopleFill>
        <div className="text-xs">My Network</div>
      </div>

      <div className="flex flex-col items-center hover:text-gray-400 cursor-pointer">
        <FaGamepad size={25}></FaGamepad>
        <div className="text-xs">Opportunities</div>
      </div>

      <div className="flex flex-col items-center hover:text-gray-400 cursor-pointer">
        <AiFillMessage size={25}></AiFillMessage>
        <div className="text-xs">Message</div>
      </div>

      <div className="flex flex-col items-center hover:text-gray-400 cursor-pointer ">
        <AiFillBell size={25}></AiFillBell>
        <div className="text-xs">Notifications</div>
      </div>
      <div className="flex flex-col items-center hover:text-gray-400 cursor-pointer ">
        <BsFillPersonFill size={25}></BsFillPersonFill>
        <div className="text-xs">Profile</div>
      </div>
    </div>
  );
}
