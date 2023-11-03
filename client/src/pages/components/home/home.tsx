import React from "react";
import Banner from "./contents/banner";
import About from "./contents/about";
import WhyKit from "./contents/whyKit";
import Categories from "./contents/categories";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <About />
      <WhyKit />
      <Categories />
    </div>
  );
};

export default Home;
