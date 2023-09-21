import React from "react";
import Navbar from "./common/navbar/navbar";
import Post from "./common/post/personalPost";
import PersonalPost from "./common/post/personalPost";
import StartAPost from "./common/post/startAPost";

export default function HomeComponent() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <PersonalPost></PersonalPost>
      <StartAPost></StartAPost>
      hello
    </div>
  );
}
