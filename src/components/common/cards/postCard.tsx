import React from "react";
import { returnedPostDetailsInterface } from "../../../api/firestoreAPI";
import moment from "moment";
import { BsFillPersonFill } from "react-icons/bs";

export default function Post({
  id,
  blog,
  postedAt,
  author,
}: returnedPostDetailsInterface) {
  const timeStamp = moment(postedAt).fromNow();

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 h-48 bg-white dark:bg-gray-600 items-start mt-4 flex-col rounded-md text-gray-800 dark:text-white p-2">
        <div className="flex flex-row gap-2">
          <div className="h-full rounded-full overflow-hidden flex border-2 border-teal-500">
            {author.imageLink ? (
              <img className="object-cover h-10 w-10" src={author.imageLink} />
            ) : (
              <BsFillPersonFill className="h-12 w-12"></BsFillPersonFill>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <div className="font-sans font-semibold text-sm">
              {author.firstName} {"'"}
              {author.alias}
              {"'"} {author.lastName}
            </div>
            <div className="font-extralight text-xs">{author.headline}</div>
          </div>
        </div>

        <div className="font-sans text-xs mt-1 font-thin text-teal-200">
          {timeStamp}
        </div>
        <div className="mt-4 font-sans text-sm">{blog}</div>
      </div>
    </div>
  );
}
