import React from "react";
import Hero from "../compoents/Hero";
import LatestCollection from "../compoents/latestCollection";
import BestSeller from "../compoents/BestSeller";
import OurPolicy from "../compoents/OurPolicy";
import NewSletterBox from "../compoents/NewSletterBox";
const Home = () => {
  
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewSletterBox />
    </div>
  );
};

export default Home;
