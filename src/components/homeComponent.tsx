import React, { useMemo, useState } from "react";
import Navbar from "./common/navbar/navbar";
import PersonalPost from "./common/post/personalPost";
import StartAPost from "./common/post/startAPost";
import { getPosts, returnedPostDetailsInterface } from "../api/firestoreAPI";
import Post from "./common/post/post";

export default function HomeComponent() {
  const [allPosts, setAllPosts] = useState<returnedPostDetailsInterface[]>();
  useMemo(() => {
    getPosts(setAllPosts);
  }, []);

  console.log(allPosts);
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <PersonalPost></PersonalPost>
      <StartAPost></StartAPost>
      {allPosts?.map((post) => {
        return (
          <Post id={post.id} blog={post.blog} postedAt={post.postedAt}></Post>
        );
      })}
      hello
    </div>
  );
}
