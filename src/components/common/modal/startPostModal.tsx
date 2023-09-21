import React, { useState } from "react";
import { Button, Modal } from "antd";
import { convertLegacyProps } from "antd/es/button";

interface StartPostModalProps {
  modalOpenState: boolean;
  setModalOpenState: (a: boolean) => void;
}

export default function StartPostModal({
  modalOpenState,
  setModalOpenState,
}: StartPostModalProps) {
  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalOpenState}
        okButtonProps={{ type: "default" }}
        cancelButtonProps={{ type: "link" }}
        onOk={() => setModalOpenState(false)}
        onCancel={() => setModalOpenState(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
}
