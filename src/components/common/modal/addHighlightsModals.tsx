import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { uploadVideo } from "../../../api/storageAPI";
import { editUser, editVideos } from "../../../api/firestoreAPI";

interface AddHighlightModalInterface {
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  setVideoUrl: (url: string[]) => void;
  videoUrl: string[];
  videoArray: string[] | null | undefined;
}

export default function AddHighlightsModals({
  modalOpenState,
  setModalOpenState,
  setVideoUrl,
  videoUrl,
  videoArray,
}: AddHighlightModalInterface) {
  const [videoUpload, setVideoUpload] = useState<File>();

  useEffect(() => {
    editVideos(videoUrl, videoArray, localStorage.getItem("id") ?? "");
  }, [videoUrl]);
  return (
    <>
      <Modal
        title="Upload Highlights"
        centered
        open={modalOpenState}
        okButtonProps={{
          type: "default",
        }}
        cancelButtonProps={{ type: "link" }}
        okText={"Save"}
        onOk={async () => {
          await uploadVideo(videoUpload, setVideoUrl);
          setModalOpenState(false);
        }}
        onCancel={() => setModalOpenState(false)}
      >
        <div className="flex justify-center pt-8 pb-8">
          <input
            type="file"
            onChange={(event) => {
              if (event.target.files) setVideoUpload(event.target.files[0]);
            }}
          ></input>
        </div>
      </Modal>
    </>
  );
}
