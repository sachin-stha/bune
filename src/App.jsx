import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

import MyContext from "./MyContext";
import Header from "./components/Header";
import PageHome from "./components/PageHome";
import PageAboutUs from "./components/PageAboutUs";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import PageCountry from "./components/Country/PageCountry";
import PageContactUs from "./components/PageContactUs";
import PageApplication from "./components/PageApplication";

import * as data from "./components/Country/Countries.json";

const App = () => {
  const breakpoints = {
    isExtraSmall: useMediaQuery("only screen and (max-width : 576px)"),
    isSmall: useMediaQuery(
      "only screen and (min-width : 577px) and (max-width : 768px)"
    ),
    isMedium: useMediaQuery(
      "only screen and (min-width : 769px) and (max-width : 992px)"
    ),
    isLarge: useMediaQuery(
      "only screen and (min-width : 993px) and (max-width : 1200px)"
    ),
    isExtraLarge: useMediaQuery(
      "only screen and (min-width : 1201px) and (max-width : 1400px)"
    ),
    isExtraVeryLarge: useMediaQuery("only screen and (min-width : 1401px)"),
  };

  const address = "Tutepani, Chapagaun Dobato, Lalitpur Nepal";
  const contactNo = "01-5151867 , 9851332126";
  const email = "buneeduconsultancy@gmail.com";
  const country = [
    "Portugal",
    "Uk",
    "Canada",
    "Romania",
    "Croatia",
    "Malta",
    "Bangladesh",
  ];

  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <MyContext.Provider
      value={{ breakpoints, currentPage, address, contactNo, email, country }}
    >
      <Router>
        <div
          className="main position-relative vw-100 vh-100"
          style={{ overflowX: "hidden" }}
        >
          <Header />

          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/aboutus" element={<PageAboutUs />} />
            <Route path="/application" element={<PageApplication />} />

            {/* Country */}
            <Route
              path="/portugal"
              element={
                <PageCountry
                  info={data.portugal}
                  color={data.reasonItemColor}
                  currency="Pounds"
                  lang="Portugese"
                  countryName="Portugal"
                  primaryInquiry="Get in Touch"
                />
              }
            />

            <Route
              path="/uk"
              element={
                <PageCountry
                  info={data.uk}
                  color={data.reasonItemColor}
                  currency="Pounds"
                  lang="Briitsh"
                  countryName="United Kingdom"
                  primaryInquiry="Get in Touch"
                />
              }
            />

            <Route
              path="/canada"
              element={
                <PageCountry
                  info={data.canada}
                  color={data.reasonItemColor}
                  currency="CAD"
                  lang="Canadian"
                  countryName="Canada"
                  primaryInquiry="Get in Touch"
                />
              }
            />

            <Route
              path="/romania"
              element={
                <PageCountry
                  info={data.romania}
                  color={data.reasonItemColor}
                  currency="Romanian Leu"
                  lang="Romanian"
                  countryName="Romania"
                  primaryInquiry="Get in Touch"
                />
              }
            />

            <Route
              path="/croatia"
              element={
                <PageCountry
                  info={data.croatia}
                  color={data.reasonItemColor}
                  currency="Euro"
                  lang="Croatian"
                  countryName="Croatia"
                  primaryInquiry="Get in Touch"
                />
              }
            />

            <Route
              path="/malta"
              element={
                <PageCountry
                  info={data.malta}
                  color={data.reasonItemColor}
                  currency="Euro"
                  lang="Maltese"
                  countryName="Malta"
                  primaryInquiry="Get in Touch"
                />
              }
            />

            <Route
              path="/bangladesh"
              element={
                <PageCountry
                  info={data.bangladesh}
                  color={data.reasonItemColor}
                  currency="Bangladeshi Taka"
                  lang="Bangladeshi"
                  countryName="Bangladesh"
                  primaryInquiry="Get in Touch"
                />
              }
            />

            <Route path="/contactus" element={<PageContactUs />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
