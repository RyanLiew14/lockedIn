import React from "react";
import { returnedPostDetailsInterface } from "../../../api/firestoreAPI";
import moment from "moment";

export default function Post({
  id,
  blog,
  postedAt,
}: returnedPostDetailsInterface) {
  console.log(postedAt);
  const timeStamp = moment(postedAt).fromNow();

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 h-48 border-slate-300 border-2 bg-slate-500 items-center mt-4 flex-col rounded-md">
        <div className="mt-4 text-black font-sans font-semibold">{id}</div>

        <div className="mt-4 text-black font-sans">{blog}</div>

        <div className="mt-4 text-black font-sans">{timeStamp}</div>
      </div>
    </div>
  );
}
