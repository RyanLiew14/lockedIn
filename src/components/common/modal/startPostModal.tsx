import React, { useState } from "react";
import { Modal } from "antd";
import { postData } from "../../../api/firestoreAPI";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentTimeStamp } from "../../../helper/useMoment";

interface StartPostModalProps {
  modalOpenState: boolean;
  setModalOpenState: (a: boolean) => void;
}

export interface postDetailsInterface {
  blog: string;
  postedAt: string;
}

export default function StartPostModal({
  modalOpenState,
  setModalOpenState,
}: StartPostModalProps) {
  const [postDetails, setPostDetails] = useState({ blog: "" });
  const sendPost = async (details: postDetailsInterface) => {
    await postData({ ...details });
    await setModalOpenState(false);
    await setPostDetails({ ...postDetails, blog: "" });
  };

  return (
    <>
      <ToastContainer></ToastContainer>
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
          sendPost({ ...postDetails, postedAt: getCurrentTimeStamp("LLL") });
        }}
        onCancel={() => setModalOpenState(false)}
      >
        <textarea
          className="text-gray-400 bg-transparent w-full outline-none"
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
