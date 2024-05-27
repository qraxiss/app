import { Image, Button, Container } from "react-bootstrap";

import smallReward from "assets/images/earn/small-reward.png";
import mediumReward from "assets/images/earn/medium-reward.png";
import largeReward from "assets/images/earn/large-reward.png";
import check from "assets/images/earn/check.png";

import { useState, useEffect } from "react";

import moment from "moment";

const smallImg = <Image src={smallReward} className="small-image" />;
const mediumImg = <Image src={mediumReward} className="medium-image" />;
const largeImg = <Image src={largeReward} className="large-image" />;

const boxData: { img: any; exp: number }[] = [
  { img: smallImg, exp: 30 },
  { img: smallImg, exp: 30 },
  { img: mediumImg, exp: 50 },
  { img: smallImg, exp: 30 },
  { img: smallImg, exp: 30 },
  { img: mediumImg, exp: 60 },
  { img: largeImg, exp: 80 },
];

export function Box({
  exp,
  img,
  day,
  today,
  past,
}: {
  exp: number;
  img: any;
  day: number;
  today?: boolean;
  past: boolean;
}) {
  return (
    <div className={`purple-box ${today ? "less-purple" : ""}`}>
      <p>Day {day}</p>
      {past ? <img src={check} className="check" /> : undefined}
      <div>{img}</div>
      <p>+{exp} XP</p>
    </div>
  );
}

export const LoginToEarn = () => {
  // const { streakGQL, loginRewardsGQL, claimGQL, lastClaimGQL, time } = useEarn()
  // const { status } = useUser()
  const [days, setDays] = useState<any>();
  // const { xp } = useRefetch()

  // useEffect(() => {
  //     switch (status) {
  //         case 'connected': {
  //             streakGQL.fn({
  //                 variables: {
  //                     service: 'login'
  //                 }
  //             })

  //             lastClaimGQL.fn({
  //                 variables: {
  //                     service: 'login'
  //                 }
  //             })
  //         }
  //     }
  // }, [status])

  // useEffect(() => {
  //     switch (loginRewardsGQL.status) {
  //         case 'success': {
  //             if (loginRewardsGQL.data?.rewards)
  //                 setDays(
  //                     loginRewardsGQL.data.rewards.map((reward: any, idx: number) => {
  //                         return <Box day={idx + 1} img={boxData[idx].img} exp={reward.reward} today={idx === streakGQL.data} past={streakGQL.data>idx}></Box>
  //                     })
  //                 )
  //         }
  //     }
  // }, [loginRewardsGQL.status])

  const [disabled, setDisabled] = useState(true);

  // useEffect(() => {
  //     switch (streakGQL.status) {
  //         case 'success': {
  //             if (loginRewardsGQL.data?.rewards)
  //                 setDays(
  //                     loginRewardsGQL.data.rewards.map((reward: any, idx: number) => {
  //                         return <Box day={idx + 1} img={boxData[idx].img} exp={reward.reward} today={idx === streakGQL.data} past={streakGQL.data>idx}></Box>
  //                     })
  //                 )
  //             break
  //         }

  //         case 'loading': {
  //             setDisabled(true)
  //         }
  //     }
  // }, [streakGQL.status, claimGQL.status, lastClaimGQL.status, time])

  // useEffect(() => {
  //     switch (lastClaimGQL.status) {
  //         case 'success': {
  //             setDisabled(moment().diff(moment(lastClaimGQL.data.createdAt), 'seconds') <= 10)
  //             break
  //         }
  //         default: {
  //             setDisabled(true)
  //         }
  //     }
  // }, [lastClaimGQL.status, time])

  // useEffect(() => {
  //     switch (claimGQL.status) {
  //         case 'loading': {
  //             setDisabled(true)
  //             break
  //         }
  //         case 'success': {
  //             streakGQL.refetch({
  //                 variables: {
  //                     service: 'login'
  //                 }
  //             })
  //             break
  //         }
  //     }
  // }, [claimGQL.status])

  return (
    <section className="section pb-0">
      <div className="login-to-earn">
        <div className="top-container">
          <div className="claim">
            <div className="">
              <h1>LOGIN to EARN</h1>
              <p>Login 7 days in a row, and your rewards will grow</p>
            </div>
            <Button
              className="btn btn btn-secondary"
              // onClick={() => {
              //     claimGQL
              //         .fn({
              //             variables: {
              //                 service: 'login'
              //             }
              //         })
              //         .then((data: any) => {
              //             xp.refetch()
              //         })
              // }}
              disabled={disabled}
            >
              Claim
            </Button>
          </div>
        </div>
        <div className="purple-box-container">
          <div className="days-container">
            <div className="days day-30xp active">
              <h5>day 1</h5>
              <img src={smallReward} alt="" />
              <h5>+30 XP</h5>
            </div>
            <div className="days day-30xp">
              <h5>day 2</h5>
              <img src={smallReward} alt="" />
              <h5>+30 XP</h5>
            </div>
            <div className="days day-50xp">
              <h5>day 3</h5>
              <img src={mediumReward} alt="" />
              <h5>+50 XP</h5>
            </div>
            <div className="days day-30xp">
              <h5>day 4</h5>
              <img src={smallReward} alt="" />
              <h5>+30 XP</h5>
            </div>
            <div className="days day-30xp">
              <h5>day 5</h5>
              <img src={smallReward} alt="" />
              <h5>+30 XP</h5>
            </div>
            <div className="days day-50xp">
              <h5>day 6</h5>
              <img src={mediumReward} alt="" />
              <h5>+50 XP</h5>
            </div>
            <div className="days day-80xp">
              <h5>day 7</h5>
              <img src={largeReward} alt="" />
              <h5>+80 XP</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
