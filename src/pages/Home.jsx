import React from "react";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import { Announcement } from "../component/Announcement";
import Categories from "../component/Categories.jsx";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
