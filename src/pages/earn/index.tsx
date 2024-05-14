import {
  LoginToEarn,
  NameService,
  StayHereToEarn,
  TaskRewards,
} from "components/earn";

export const Earn = () => {
  return (
    <section className="section pt-20 ms-5">
      <div className="container earn-page">
        <LoginToEarn />
        <hr />
        <StayHereToEarn />
        <hr />
        <NameService />
        <hr />
        <TaskRewards />
        {/* <hr />
            <SpinToEarn /> */}
      </div>
    </section>
  );
};
