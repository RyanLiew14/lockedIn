import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AddAchievementModal from "../modal/addAchievementModal";
import { useParams } from "react-router-dom";

export interface AchievementInterface {
  achievements:
    | [
        {
          game: string;
          achievementList: [{ achievement: string; year: string }];
        }
      ]
    | null
    | undefined;
}

export default function AchievementsCard(achievements: AchievementInterface) {
  const [modalOpen, setModalOpen] = useState(false);
  const [achievementState, setAchievementState] =
    useState<AchievementInterface>(achievements);

  const { id } = useParams();
  return (
    <div className="flex w-full justify-center">
      <AddAchievementModal
        modalOpenState={modalOpen}
        setModalOpenState={setModalOpen}
        setAchievements={setAchievementState}
        achievements={achievementState}
      />
      <div className="relative flex w-9/12 pb-4 bg-white dark:bg-gray-600 items-left mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        {localStorage.getItem("id") === id && (
          <div className="absolute right-0 p-3 cursor-pointer">
            <AiFillPlusCircle
              onClick={() => {
                setModalOpen(true);
              }}
              size={30}
            ></AiFillPlusCircle>
          </div>
        )}

        <div className="mt-4 font-sans font-semibold pl-3 text-lg">
          Achievements
        </div>

        {achievementState?.achievements?.map((achievement) => (
          <div className="pl-3 pt-3">
            <p>{achievement.game}</p>
            <ul className="list-disc pl-12">
              {achievement.achievementList.map((elem) => (
                <li className=" relative mt-4  font-sans w-full">
                  {elem.achievement}
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
