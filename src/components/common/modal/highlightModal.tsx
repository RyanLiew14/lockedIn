import { Modal } from "antd";
import React, { useEffect } from "react";
import { deleteVideos, editVideos } from "../../../api/firestoreAPI";
import { deleteVideo } from "../../../api/storageAPI";

interface HighlightModalInterface {
  videoLink: string;
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  setVideoArrayState: (arr: string[]) => void;
  index: number;
  videoArray: string[];
  videoUrl: string[];
}

export default function HighlightModal({
  videoLink,
  modalOpenState,
  setModalOpenState,
}: HighlightModalInterface) {
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
        onOk={() => {
          deleteVideos(videoLink, localStorage.getItem("id") ?? "");
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
