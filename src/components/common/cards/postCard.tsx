import React from "react";
import { returnedPostDetailsInterface } from "../../../api/firestoreAPI";
import moment from "moment";

export default function Post({
  id,
  blog,
  postedAt,
}: returnedPostDetailsInterface) {
  const timeStamp = moment(postedAt).fromNow();

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 h-48 bg-white dark:bg-gray-600 items-center mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="mt-4 font-sans font-semibold">{id}</div>

        <div className="mt-4 font-sans">{blog}</div>

        <div className="mt-4 font-sans">{timeStamp}</div>
      </div>
    </div>
  );
}
