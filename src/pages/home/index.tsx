import React from "react";
import {
  Banner,
  DealOfDay,
  NewArrival,
  Premium,
  TopPicks,
  WhyChoose,
} from "components/home";

const Home = () => {
  document.title = "Shopcek";

  return (
    <React.Fragment>
      <Banner />
      <Premium />
      <TopPicks />
      <DealOfDay />
      <NewArrival />
      <WhyChoose />
    </React.Fragment>
  );
};

export default Home;
