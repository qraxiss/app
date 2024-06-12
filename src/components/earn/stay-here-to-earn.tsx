import React from "react";
import { Image, ProgressBar } from "react-bootstrap";
import smallReward from "assets/images/earn/icons1.png";
import mediumReward from "assets/images/earn/icons2.png";

const data = [
  {
    title: "15 mins",
    image: mediumReward,
    points: "10 Xp",
    time: 15,
  },
  {
    title: "3 hours",
    image: mediumReward,
    points: "10 Xp",
    time: 180,
  },
  {
    title: "6 hours",
    image: mediumReward,
    points: "20 Xp",
    time: 360,
  },
  {
    title: "10 hours",
    image: mediumReward,
    points: "40 Xp",
    time: 600,
  },
];

const currentProgress = 300;
const totalRequiredTime = 600;

export const StayHereToEarn = () => {
  return (
    <section className="section pb-0">
      <div className="m-3">
        <p className="quests-heading">daily stay here to earn</p>
        <p className="rewards-paragraph">
          Earn rewards based on the time you spend here
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="reward-item">
            <h4 className="reward-title">{item.title}</h4>
            <Image
              src={item.image}
              alt={`${item.title} reward`}
              className="reward-image"
            />
            <h4 className="reward-points">{item.points}</h4>
          </div>
        ))}
      </div>
      <ProgressBar
        now={(currentProgress / totalRequiredTime) * 100}
        className="reward-progress-bar"
      />
    </section>
  );
};
