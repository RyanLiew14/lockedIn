import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import EditCareerModal from "../modal/editCareerModal";

export interface CareerInterface {
  items:
    | [
        {
          organization: string;
          roleList: [{ role: string; year: string }];
        }
      ]
    | null
    | undefined;
}

export default function ExperienceCard(items: CareerInterface) {
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [career, setCareer] = useState(items);

  const { id } = useParams();
  return (
    <div className="flex w-full justify-center">
      <EditCareerModal
        modalOpenState={careerModalOpen}
        setModalOpenState={setCareerModalOpen}
        career={career}
        setCareer={setCareer}
      />
      <div className="relative flex w-9/12 pb-4 bg-white dark:bg-gray-600 items-left mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        {localStorage.getItem("id") === id && (
          <div className="absolute right-0 p-3 cursor-pointer">
            <AiFillPlusCircle
              onClick={() => {
                setCareerModalOpen(true);
              }}
              size={30}
            ></AiFillPlusCircle>
          </div>
        )}

        <div className="mt-4 font-sans font-semibold pl-3 text-lg">Career</div>

        <div className="mt-4 pl-3 font-sans w-full">
          Experience placeholder
          <div className="flex justify-end pr-3">2023</div>
        </div>
        <div className="mt-4 pl-3 font-sans w-full">
          Experience placeholder 2
          <div className="flex justify-end pr-3">2023</div>
        </div>
        <div className="mt-4 pl-3 font-sans w-full">
          Experience placeholder 3
          <div className="flex justify-end pr-3">2023</div>
        </div>
        <div className="mt-4 pl-3 font-sans w-full">
          Experience placeholder 4
          <div className="flex justify-end pr-3">2023</div>
        </div>
      </div>
    </div>
  );
}
