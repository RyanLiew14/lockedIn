import React, { useMemo, useState, SetStateAction } from "react";
import Navbar from "./common/navbar/navbar";
import PersonalPost from "./common/post/personalPost";
import StartAPost from "./common/post/startAPost";
import {
  getPosts,
  getPostsTest,
  returnedPostDetailsInterface,
} from "../api/firestoreAPI";
import { postDetailsInterface } from "./common/modal/startPostModal";
import Post from "./common/post/post";

export default function HomeComponent() {
  const [allPosts, setAllPosts] = useState<returnedPostDetailsInterface[]>();
  useMemo(() => {
    getPostsTest(setAllPosts);
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <PersonalPost></PersonalPost>
      <StartAPost></StartAPost>
      {allPosts?.map((post) => {
        console.log(allPosts);
        return <Post id={post.id} blog={post.blog}></Post>;
      })}
      hello
    </div>
  );
}
