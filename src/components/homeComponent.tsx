import React, { useMemo, useState } from "react";
import Navbar from "./common/navbar/navbar";
import PersonalPost from "./common/cards/personalCard";
import StartAPost from "./common/cards/startAPost";
import {
  getPosts,
  getUserById,
  getUserInterface,
  returnedPostDetailsInterface,
} from "../api/firestoreAPI";
import Post from "./common/cards/postCard";
import { useParams } from "react-router-dom";

export default function HomeComponent() {
  const [allPosts, setAllPosts] = useState<returnedPostDetailsInterface[]>();

  const [userDetails, setUserDetails] = useState<getUserInterface>();

  useMemo(() => {
    getUserById(localStorage.getItem("id"), setUserDetails);
    getPosts(setAllPosts);
  }, []);

  console.log(allPosts);

  const firstName = userDetails?.firstName;
  const lastName = userDetails?.lastName;
  const userEmail = userDetails?.email;
  const headline = userDetails?.headline;
  const location = userDetails?.location;
  const alias = userDetails?.alias;
  const achievements = userDetails?.achievements;
  const imageLink = userDetails?.imageLink;
  const videoArray = userDetails?.videoUrl;
  const career = userDetails?.career;

  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <PersonalPost
        firstName={firstName}
        lastName={lastName}
        headline={headline}
        alias={alias}
        imageLink={imageLink}
      ></PersonalPost>
      <StartAPost
        firstName={firstName}
        lastName={lastName}
        alias={alias}
        email={userEmail}
        imageLink={imageLink}
        headline={headline}
      ></StartAPost>
      {allPosts?.map((post) => {
        return (
          <Post
            id={post.id}
            blog={post.blog}
            postedAt={post.postedAt}
            author={post.author}
          ></Post>
        );
      })}
    </div>
  );
}
