import { Modal } from "antd";
import React, { useState } from "react";

interface editProfileModal {
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  firstName: string | null | undefined;
  setFirstName: (name: string) => void;
  lastName: string | null | undefined;
  setLastName: (name: string) => void;
  alias: string | null | undefined;
  setAlias: (name: string) => void;
  headline: string | null | undefined;
  setHeadline: (headline: string) => void;
  email: string | null | undefined;
  setEmail: (email: string) => void;
  location: string | null | undefined;
  setLocation: (location: string) => void;
}

interface EditProps {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  headline: string | null | undefined;
  email: string | null | undefined;
  alias: string | null | undefined;
  location: string | null | undefined;
}

export default function EditProfileModal({
  modalOpenState,
  setModalOpenState,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  alias,
  setAlias,
  headline,
  setHeadline,
  location,
  setLocation,
  email,
  setEmail,
}: editProfileModal) {
  const [edit, setEdit] = useState<EditProps>({
    firstName: firstName,
    lastName: lastName,
    alias: alias,
    headline: headline,
    location: location,
    email: email,
  });
  return (
    <>
      <Modal
        title="Edit Profile"
        centered
        open={modalOpenState}
        okButtonProps={{
          type: "default",
          disabled:
            edit.firstName === "" || edit.lastName === "" || edit.email === "",
        }}
        cancelButtonProps={{ type: "link" }}
        okText={"Save"}
        onOk={() => {
          setFirstName(edit.firstName ?? "");
          setLastName(edit.lastName ?? "");
          setEmail(edit.email ?? "");
          setHeadline(edit.headline ?? "");
          setAlias(edit.alias ?? "");
          setLocation(edit.location ?? "");
          //TODO: send info to db

          setModalOpenState(false);
        }}
        onCancel={() => {
          setModalOpenState(false);
          setEdit({
            firstName: firstName,
            lastName: lastName,
            headline: headline,
            alias: alias,
            email: email,
            location: location,
          });
        }}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="">First Name</label>
            <input
              className="text-white bg-white dark:bg-gray-600 p-2 rounded-md"
              placeholder={firstName ?? ""}
              onChange={(event) => {
                setEdit({ ...edit, firstName: event.target.value });
              }}
              value={edit.firstName ?? ""}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="">Last Name</label>
            <input
              className="text-white bg-white dark:bg-gray-600 p-2 rounded-md"
              placeholder={lastName ?? ""}
              onChange={(event) => {
                setEdit({ ...edit, lastName: event.target.value });
              }}
              value={edit.lastName ?? ""}
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="">Headline</label>
            <input
              className="text-white bg-white dark:bg-gray-600 p-2 rounded-md"
              placeholder={headline ?? ""}
              onChange={(event) => {
                setEdit({ ...edit, headline: event.target.value });
              }}
              value={edit.headline ?? ""}
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="">Alias</label>
            <input
              className="text-white bg-white dark:bg-gray-600 p-2 rounded-md"
              placeholder={alias ?? ""}
              onChange={(event) => {
                setEdit({ ...edit, alias: event.target.value });
              }}
              value={edit.alias ?? ""}
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="">Email</label>
            <input
              className="text-white bg-white dark:bg-gray-600 p-2 rounded-md"
              placeholder={email ?? ""}
              onChange={(event) => {
                setEdit({ ...edit, email: event.target.value });
              }}
              value={edit.email ?? ""}
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="">Location</label>
            <input
              className="text-white bg-white dark:bg-gray-600 p-2 rounded-md"
              placeholder={location ?? ""}
              onChange={(event) => {
                setEdit({ ...edit, location: event.target.value });
              }}
              value={edit.location ?? ""}
            ></input>
          </div>
        </div>
      </Modal>
    </>
  );
}
