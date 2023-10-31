import { useEffect, useMemo, useState } from "react";
import Navbar from "./common/navbar/navbar";
import { AllUserInterface, getAllUsers } from "../api/firestoreAPI";
import UserCard from "./common/cards/userCard";
import { AiOutlineSearch } from "react-icons/ai";

export default function NetworkComponent() {
  const [allUsers, setAllUsers] = useState<AllUserInterface[]>();
  const [copyAllUsers, setCopyAllUsers] = useState<AllUserInterface[]>();
  const [searchQuery, setSearchQuery] = useState("");

  useMemo(() => {
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    if (searchQuery !== "") {
      setCopyAllUsers(
        allUsers?.filter(
          (elem) =>
            elem.firstName?.includes(searchQuery) ||
            elem.lastName?.includes(searchQuery) ||
            elem.alias?.includes(searchQuery)
        )
      );
    } else {
      setCopyAllUsers(allUsers);
    }
  }, [allUsers, searchQuery]);

  console.log(copyAllUsers);

  return (
    <div className="flex flex-col space-y-4">
      <Navbar></Navbar>
      <div className="flex flex-row items-start">
        <div className="flex flex-col">
          <div className="flex flex-row gap-4 items-center">
            <AiOutlineSearch size={25}></AiOutlineSearch>
            <input
              className="p-1 w-48 rounded-md text-black"
              placeholder="search"
              onChange={(event) => {
                setSearchQuery(event?.target.value);
              }}
            ></input>
          </div>
        </div>

        <></>
        <div className="grid grid-cols-5 gap-2 ml-2">
          {copyAllUsers?.map(
            (elem) =>
              elem.id !== localStorage.getItem("id") && (
                <UserCard
                  id={elem.id}
                  alias={elem.alias}
                  firstName={elem.firstName}
                  lastName={elem.lastName}
                  imageLink={elem.imageLink}
                  headline={elem.headline}
                  location={elem.location}
                  email={elem.email}
                  incomingInvitation={elem.incomingInvitation}
                  outgoingInvitation={elem.outgoingInvitation}
                  connections={elem.connections}
                ></UserCard>
              )
          )}
        </div>
      </div>
    </div>
  );
}
