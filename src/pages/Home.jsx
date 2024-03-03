import React from "react";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import { Announcement } from "../component/Announcement";
import Categories from "../component/Categories.jsx";
import Products from "../component/Products.jsx";
import Newsletter from "../component/Newsletter.jsx";
import Footer from "../component/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
