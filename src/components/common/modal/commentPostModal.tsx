import { Modal } from "antd";
import React, { useState } from "react";
import { AuthorInterface, commentPost } from "../../../api/firestoreAPI";

interface CommentPostModalInterface {
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  author: AuthorInterface;
  postId: string;
}

export interface CommentInterface {
  author: AuthorInterface;
  comment: string;
  likes: string[];
  subComments: CommentInterface[];
}

export default function CommentPostModal({
  modalOpenState,
  setModalOpenState,
  author,
  postId,
}: CommentPostModalInterface) {
  const [commentState, setCommentState] = useState<CommentInterface>({
    author: author,
    comment: "",
    likes: [],
    subComments: [],
  });

  return (
    <>
      <Modal
        title="Share your thoughts"
        centered
        open={modalOpenState}
        okButtonProps={{
          type: "default",
          disabled:
            commentState?.comment === undefined || commentState?.comment === "",
        }}
        cancelButtonProps={{ type: "link" }}
        okText={"Comment"}
        onOk={() => {
          commentPost(postId, commentState);
          setModalOpenState(false);
        }}
        onCancel={() => setModalOpenState(false)}
      >
        <textarea
          className="text-gray-600 bg-transparent w-full outline-none rounded-lg"
          placeholder={"What do you want to talk about?"}
          onChange={(event) => {
            setCommentState({ ...commentState, comment: event.target.value });
          }}
          value={commentState?.comment}
        ></textarea>
      </Modal>
    </>
  );
}
