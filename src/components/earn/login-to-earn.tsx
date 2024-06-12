import React from "react";
import { Image, Container } from "react-bootstrap";
import smallReward from "assets/images/earn/icons1.png";
import mediumReward from "assets/images/earn/icons2.png";
import largeReward from "assets/images/earn/icons3.png";
import check from "assets/images/earn/check.png";

const data = [
  {
    title: "Day 1",
    image: smallReward,
    points: "20 Xp",
  },
  {
    title: "Day 2",
    image: mediumReward,
    points: "10 Xp",
  },
  {
    title: "Day 3",
    image: mediumReward,
    points: "20 Xp",
  },
  {
    title: "Day 4",
    image: mediumReward,
    points: "30 Xp",
  },
  {
    title: "Day 5",
    image: mediumReward,
    points: "40 Xp",
  },
  {
    title: "Day 6",
    image: mediumReward,
    points: "50 Xp",
  },
  {
    title: "Day 7",
    image: largeReward,
    points: "100 Xp",
  },
];

export const LoginToEarn = () => {
  return (
    <section className="section pb-0">
      <div className="m-3">
        <p className="quests-heading">LOGIN to EARN</p>
        <p className="rewards-paragraph">
          Login 7 days in a row, and your rewards will grow
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
    </section>
  );
};
