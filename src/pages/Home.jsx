import React from "react";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import { Announcement } from "../component/Announcement";
import Categories from "../component/Categories.jsx";
import Products from "../component/Products.jsx";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
