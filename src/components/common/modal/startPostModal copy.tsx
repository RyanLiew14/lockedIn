import React, { useState } from "react";
import { Modal } from "antd";
import { postData } from "../../../api/firestoreAPI";
import { getCurrentTimeStamp } from "../../../helper/useMoment";

interface StartPostModalProps {
  modalOpenState: boolean;
  setModalOpenState: (a: boolean) => void;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  alias: string | null | undefined;
  email: string | null | undefined;
  imageLink: string | null | undefined;
  headline: string | null | undefined;
}

export interface postDetailsInterface {
  blog: string;
  postedAt: string;
  author: {
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    alias: string | null | undefined;
    email: string | null | undefined;
    imageLink: string | null | undefined;
    headline: string | null | undefined;
  };
}

export default function StartPostModal({
  modalOpenState,
  setModalOpenState,
  firstName,
  lastName,
  email,
  imageLink,
  alias,
  headline,
}: StartPostModalProps) {
  const [postDetails, setPostDetails] = useState({ blog: "" });
  const sendPost = async (details: postDetailsInterface) => {
    await postData({ ...details });
    await setModalOpenState(false);
    await setPostDetails({ ...postDetails, blog: "" });
  };

  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpenState}
        okButtonProps={{
          type: "default",
          disabled: postDetails.blog === "",
        }}
        cancelButtonProps={{ type: "link" }}
        okText={"Post"}
        onOk={() => {
          sendPost({
            ...postDetails,
            postedAt: getCurrentTimeStamp("LLL"),
            author: {
              firstName: firstName,
              lastName: lastName,
              alias: alias,
              email: email,
              imageLink: imageLink,
              headline: headline,
            },
          });
        }}
        onCancel={() => setModalOpenState(false)}
      >
        <textarea
          className="text-gray-600 bg-transparent w-full outline-none rounded-lg"
          placeholder={"What do you want to talk about?"}
          onChange={(event) => {
            setPostDetails({ ...postDetails, blog: event.target.value });
          }}
          value={postDetails.blog}
        ></textarea>
      </Modal>
    </>
  );
}
