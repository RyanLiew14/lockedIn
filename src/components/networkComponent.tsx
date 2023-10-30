import { useEffect, useState } from "react";
import Navbar from "./common/navbar/navbar";
import { AllUserInterface, getAllUsers } from "../api/firestoreAPI";
import UserCard from "./common/cards/userCard";

export default function NetworkComponent() {
  const [allUsers, setAllUsers] = useState<AllUserInterface[]>();

  useEffect(() => {
    getAllUsers(setAllUsers);
  }, []);

  console.log(allUsers);
  return (
    <div className="flex flex-col space-y-4">
      <Navbar></Navbar>
      <div className="grid grid-cols-5 gap-2 ml-2">
        {allUsers?.map((elem) => (
          <UserCard
            id={elem.id}
            alias={elem.alias}
            firstName={elem.firstName}
            lastName={elem.lastName}
            imageLink={elem.imageLink}
            headline={elem.headline}
            location={elem.location}
            email={elem.email}
          ></UserCard>
        ))}
        <p className="text-center">hi</p>
        <p className="text-center">hi</p>
        <p className="text-center">hi</p>
        <p className="text-center">hi</p>
        <p className="text-center">hi</p>
        <p className="text-center">hi</p>
        <p className="text-center">hi</p>
      </div>
    </div>
  );
}
