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
    <div className="flex flex-col">
      <Navbar></Navbar>
      <div className="grid grid-cols-6">
        {allUsers?.map((elem) => (
          <UserCard></UserCard>
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
