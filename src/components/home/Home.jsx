import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import "./home.css";
import Pricing from "../pricing/Pricing";
import Testimonials from "../testimonials/Testimonials";
import FaqComp from "../faqcomp/Faqcomp";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <FaqComp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
