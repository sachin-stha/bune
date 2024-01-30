import BillBoard from "./Home/BillBoard";
import Country from "./Home/Country";
import Services from "./Home/Services";
import FeedBack from "./Home/FeedBack";
import Subscribe from "./Subscribe";
import Inquiry from "./Inquiry";
import AboutUs from "./Home/AboutUs";

import { useState, useEffect } from "react";

const PageHome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(scrollPosition);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <>
      <title>Bune Education Consultancy | Home</title>
      <BillBoard />
      <AboutUs />
      <Services />
      <Country />
      <FeedBack />
      <Subscribe />
      <Inquiry primary="Get in Touch" />
    </>
  );
};

export default PageHome;
