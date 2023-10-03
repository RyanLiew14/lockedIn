import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AddAchievementModal from "../modal/addAchievementModal";

export interface AchievementInterface {
  items:
    | [
        {
          game: string;
          achievementList: [{ achievement: string; year: string }];
        }
      ]
    | null
    | undefined;
}

export default function AchievementsCard(items: AchievementInterface) {
  const [modalOpen, setModalOpen] = useState(false);
  const [achievements, setAchievements] = useState<AchievementInterface>(items);
  return (
    <div className="flex w-full justify-center">
      <AddAchievementModal
        modalOpenState={modalOpen}
        setModalOpenState={setModalOpen}
        setAchievements={setAchievements}
        achievements={achievements}
      />
      <div className="relative flex w-9/12 pb-4 bg-white dark:bg-gray-600 items-left mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="absolute right-0 p-3 cursor-pointer">
          <AiFillPlusCircle
            onClick={() => {
              setModalOpen(true);
            }}
            size={30}
          ></AiFillPlusCircle>
        </div>
        <div className="mt-4 font-sans font-semibold pl-3 text-lg">
          Achievements
        </div>

        {achievements?.items?.map((achievement) => (
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
