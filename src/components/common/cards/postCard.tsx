import React, { useState } from "react";
import {
  deleteComment,
  likePost,
  returnedPostDetailsInterface,
  unlikePost,
} from "../../../api/firestoreAPI";
import moment from "moment";
import { BsFillPersonFill, BsHandThumbsUp, BsX } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import CommentPostModal from "../modal/commentPostModal";

export default function Post({
  id,
  blog,
  postedAt,
  author,
  likes,
  comment,
}: returnedPostDetailsInterface) {
  const timeStamp = moment(postedAt).fromNow();
  const [commentModalOpen, setCommentModalOpen] = useState(false);

  return (
    <div className="flex w-full justify-center">
      <CommentPostModal
        modalOpenState={commentModalOpen}
        setModalOpenState={setCommentModalOpen}
        author={author}
        postId={id}
      />
      <div className="flex w-9/12 bg-white dark:bg-gray-600 items-start mt-4 flex-col rounded-md text-gray-800 dark:text-white p-2">
        <div className="flex flex-row gap-2">
          <a
            href={`profile/${author.id}`}
            className="h-full rounded-full overflow-hidden flex border-2 border-teal-500"
          >
            {author.imageLink ? (
              <img className="object-cover h-10 w-10" src={author.imageLink} />
            ) : (
              <BsFillPersonFill className="h-12 w-12"></BsFillPersonFill>
            )}
          </a>
          <a href={`profile/${author.id}`} className="flex flex-col space-y-1">
            <div className="font-sans font-semibold text-sm">
              {author.firstName} {"'"}
              {author.alias}
              {"'"} {author.lastName}
            </div>
            <div className="font-extralight text-xs">{author.headline}</div>
          </a>
        </div>
        <div className="font-sans text-xs mt-1 font-thin text-teal-200">
          {timeStamp}
        </div>
        <div className="mt-4 font-sans text-sm">{blog}</div>
        <div className="flex flex-row mt-3 gap-2">
          <div className="text-xs"> {likes?.length ?? 0} likes</div>
          <div className="text-xs"> {comment?.length ?? 0} Comments</div>
        </div>

        <div className="mt-4 w-full">
          {comment?.map((comment) => (
            <div className="relative flex flex-col bg-gray-800 rounded-md mb-2 p-2">
              {localStorage.getItem("userEmail") === comment.author.email && (
                <div className="absolute right-0 top-0">
                  <BsX
                    className="hover: cursor-pointer"
                    onClick={() => {
                      deleteComment(id, comment);
                    }}
                  ></BsX>
                </div>
              )}

              <div className="flex flex-row gap-2">
                <div className="h-full rounded-full overflow-hidden flex border-2 border-teal-500">
                  {comment.author.imageLink ? (
                    <img
                      className="object-cover h-10 w-10"
                      src={comment.author.imageLink}
                    />
                  ) : (
                    <BsFillPersonFill className="h-12 w-12"></BsFillPersonFill>
                  )}
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="font-sans font-semibold text-sm">
                    {comment.author.firstName} {"'"}
                    {comment.author.alias}
                    {"'"} {comment.author.lastName}
                  </div>
                  <div className="font-extralight text-xs">
                    {comment.author.headline}
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm">{comment.comment}</div>
              {/* <div className="flex flex-row w-full text-xs mt-2">
                {comment.likes?.includes(localStorage.getItem("id") ?? "") ? (
                  <button
                    onClick={() => {
                      unlikePost(id, localStorage.getItem("id") ?? "");
                    }}
                    className="rounded-lg p-1 flex flex-row items-center gap-1 text-teal-500 hover:text-white"
                  >
                    <BsHandThumbsUp />
                    Like
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      likeComment(
                        comment.id,
                        localStorage.getItem("id") ?? "",
                        id
                      );
                    }}
                    className="rounded-lg p-1 flex flex-row items-center gap-1 hover:text-teal-500"
                  >
                    <BsHandThumbsUp />
                    Like
                  </button>
                )}

                <button
                  onClick={() => {
                    setCommentModalOpen(true);
                  }}
                  className="rounded-lg p-1 flex flex-row items-center gap-1 hover:text-teal-500"
                >
                  <BiCommentDots />
                  Comment
                </button>
              </div> */}
            </div>
          ))}
        </div>

        <div className="flex flex-row w-full justify-center">
          {likes?.includes(localStorage.getItem("id") ?? "") ? (
            <button
              onClick={() => {
                unlikePost(id, localStorage.getItem("id") ?? "");
              }}
              className="rounded-lg p-1 flex flex-row items-center gap-1 text-teal-500 hover:text-white"
            >
              <BsHandThumbsUp />
              Like
            </button>
          ) : (
            <button
              onClick={() => {
                likePost(id, localStorage.getItem("id") ?? "");
              }}
              className="rounded-lg p-1 flex flex-row items-center gap-1 hover:text-teal-500"
            >
              <BsHandThumbsUp />
              Like
            </button>
          )}

          <button
            onClick={() => {
              setCommentModalOpen(true);
            }}
            className="rounded-lg p-1 flex flex-row items-center gap-1 hover:text-teal-500"
          >
            <BiCommentDots />
            Comment
          </button>
        </div>
      </div>
    </div>
  );
}
