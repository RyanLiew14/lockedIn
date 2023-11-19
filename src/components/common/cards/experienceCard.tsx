import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import EditCareerModal from "../modal/editCareerModal";

export interface CareerInterface {
  career:
    | [
        {
          organization: string;
          roleList: [{ role: string; year: string }];
        }
      ]
    | null
    | undefined;
}

export default function ExperienceCard(career: CareerInterface) {
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [careerState, setCareerState] = useState(career);

  const { id } = useParams();
  return (
    <div className="flex w-full justify-center">
      <EditCareerModal
        modalOpenState={careerModalOpen}
        setModalOpenState={setCareerModalOpen}
        career={careerState}
        setCareer={setCareerState}
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
        {careerState?.career?.map((career) => (
          <div className="pl-3 pt-3">
            <p>{career.organization}</p>
            <ul className="list-disc pl-12">
              {career.roleList.map((elem) => (
                <li className=" relative mt-4  font-sans w-full">
                  {elem.role}
                  <span className="absolute right-3">{elem.year}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
