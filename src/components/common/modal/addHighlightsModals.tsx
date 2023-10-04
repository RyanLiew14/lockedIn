import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { uploadVideo } from "../../../api/storageAPI";
import { addVideos } from "../../../api/firestoreAPI";
import { toast } from "react-toastify";

interface AddHighlightModalInterface {
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  setVideoUrl: (url: string[]) => void;
  videoUrl: string[];
  videoArray: string[] | null | undefined;
  setVideoArray: (arr: string[]) => void;
}

export default function AddHighlightsModals({
  modalOpenState,
  setModalOpenState,
  setVideoUrl,
  videoUrl,
  videoArray,
  setVideoArray,
}: AddHighlightModalInterface) {
  const [videoUpload, setVideoUpload] = useState<File>();

  useEffect(() => {
    addVideos(
      videoUrl,
      setVideoUrl,
      videoArray,
      setVideoArray,
      localStorage.getItem("id") ?? ""
    );
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
        onOk={() => {
          uploadVideo(videoUpload, setVideoUrl);
          toast.loading("Uploading highlight", {
            toastId: "highlight-loading-toast-id",
          });
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
