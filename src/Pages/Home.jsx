import React from "react";

import Hero from "../Components/Hero";
import AboutCompany from "../Components/AboutCompany";

const Home = () => {
  return (
    <div>
      <Hero image="/images/hero.jpg" title=" مرحبأ بكم في عقارات بلس" />
      <AboutCompany />
    </div>
  );
};

export default Home;
