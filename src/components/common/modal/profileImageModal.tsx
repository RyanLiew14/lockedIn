import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { uploadImage } from "../../../api/storageAPI";
import { editUser } from "../../../api/firestoreAPI";

interface ProfileImageModalProps {
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  setImageLink: (str: string) => void;
  imageLink: string | undefined | null;
}

export default function ProfileImageModal({
  modalOpenState,
  setModalOpenState,
  setImageLink,
  imageLink,
}: ProfileImageModalProps) {
  const [imageUpload, setImageUpload] = useState<File>();
  // const [imageLink, setImageLink] = useState<string | null | undefined>();

  useEffect(() => {
    editUser({ imageLink: imageLink }, localStorage.getItem("id") ?? "");
  }, [imageLink]);

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
          uploadImage(imageUpload, setImageLink);
          setModalOpenState(false);
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
