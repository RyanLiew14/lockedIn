import { Modal } from "antd";
import React, { useEffect } from "react";
import { editVideos } from "../../../api/firestoreAPI";
import { deleteVideo } from "../../../api/storageAPI";

interface HighlightModalInterface {
  videoLink: string;
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  index: number;
  videoArray: string[];
  videoUrl: string[];
}

export default function HighlightModal({
  videoLink,
  modalOpenState,
  setModalOpenState,
  videoArray,
  index,
  videoUrl,
}: HighlightModalInterface) {
  console.log(modalOpenState);

  return (
    <>
      <Modal
        title="Watch Highlight"
        centered
        open={modalOpenState}
        okButtonProps={{
          type: "default",
        }}
        cancelButtonProps={{ type: "link" }}
        okText={"Delete"}
        cancelText={"Close"}
        onOk={async () => {
          videoArray.splice(index, 1);
          editVideos(videoUrl, videoArray, localStorage.getItem("id") ?? "");
          deleteVideo(videoLink);
          setModalOpenState(false);
        }}
        onCancel={() => setModalOpenState(false)}
      >
        <div className="flex justify-center pt-8 pb-8">
          <video src={videoLink} controls></video>
        </div>
      </Modal>
    </>
  );
}
