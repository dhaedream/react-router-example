import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import "./home.css";
import Pricing from "../pricing/Pricing";
import Testimonials from "../testimonials/Testimonials";
import Faq from "../faq/Faq";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
