import React from "react";


const achievementList = [
  {
    metric: "Projects",
    value: "40+",
  },
  {
    metric: "Certification",
    value: "6+",
  },
  {
    metric: "Intern",
    value: "6m",
  },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353f] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
