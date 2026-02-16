import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurWork from "../../components/OurWork/OurWork";
import NarrativeSection from "../../components/NarrativeSection/NarrativeSection";
import Impact from "../../components/Impact/Impact";
import Help from "../../components/Help/Help";
import Doners from "../../components/Doners/Doners";
import Contact from "../../components/Contact/Contact";
import Blogs from "../../components/Blogs/Blogs";
import Footer from "../../components/Footer/Footer";
import Gallary from "../../components/Gallary/Gallary"
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <OurWork />
      <NarrativeSection />
      <Impact />
      <Help />
      <Doners />
      <Gallary/>
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
