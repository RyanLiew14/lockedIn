import { Modal } from "antd";
import React, { useState } from "react";
import { uploadImage } from "../../../api/storageAPI";
import { editUser } from "../../../api/firestoreAPI";

interface ProfileImageModalProps {
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
}

export default function ProfileImageModal({
  modalOpenState,
  setModalOpenState,
}: ProfileImageModalProps) {
  const [imageUpload, setImageUpload] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  return (
    <>
      <Modal
        title="Upload Image"
        centered
        open={modalOpenState}
        okButtonProps={{
          type: "default",
        }}
        cancelButtonProps={{ type: "link" }}
        okText={"Save"}
        onOk={() => {
          uploadImage(imageUpload, setImageUrl);
          editUser({ imageLink: imageUrl }, localStorage.getItem("id") ?? "");
        }}
        onCancel={() => setModalOpenState(false)}
      >
        <div className="flex justify-center pt-8 pb-8">
          <input
            type="file"
            onChange={(event) => {
              if (event.target.files) setImageUpload(event.target.files[0]);
            }}
          ></input>
        </div>
      </Modal>
    </>
  );
}
