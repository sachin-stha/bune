import MyContext from "../../MyContext";
import { useContext, useState, useEffect, useRef } from "react";

import "../../css/Home/BillBoard.css";
import { Link } from "react-router-dom";

const BillBoard = () => {
  const captions = {
    primary: [
      "Guiding Dreams,#Building Futures.",
      "Educate, Elevate,#Transform Tomorrow.",
      "Explore, Achieve,#Global Dreams.",
      "Study, Thrive,#Abroad Tomorrow.",
    ],
    secondary: [
      "Guiding dreams, shaping paths, building futures for success and fulfillment.",
      "Educate minds, elevate aspirations, transform tomorrow for a brighter future.",
      "Explore opportunities, achieve goals, turning global dreams into vibrant realities.",
      "Study diligently, thrive academically, paving the way for abroad tomorrow.",
    ],
  };

  const [currentCaption, setCurrentCaption] = useState(0);
  const [topPrimaryCapWidth, setTopPrimaryCapWidth] = useState("100");
  const [bottomPrimaryCapWidth, setBottomPrimaryCapWidth] = useState("100");
  const [secondaryOpacity, setSecondaryOpacity] = useState(1);

  const typingtext = () => {
    setBottomPrimaryCapWidth("0");
    setTopPrimaryCapWidth("0");
    setSecondaryOpacity(0);

    setTimeout(function () {
      setBottomPrimaryCapWidth("100");
      setTopPrimaryCapWidth("100");
      setSecondaryOpacity(1);
    }, 1000);
  };

  // ani();
  useEffect(() => {
    const interval = setInterval(function () {
      setTimeout(function () {
        setCurrentCaption((currentCaption) => (currentCaption + 1) % 4);
      }, 1000);

      typingtext();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [currentCaption]);

  return (
    <>
      <div className="billboard w-100 position-relative">
        <div className="billboard-wrapper m-auto d-flex align-items-center justify-content-between position-relative">
          <div className="billboard-text-contents">
            <div className="billboard-captions my-0">
              <div className="">
                <div className="caption-primary d-flex">
                  <span>
                    <p
                      style={{
                        width: topPrimaryCapWidth + "%",
                      }}
                    >
                      {captions.primary[currentCaption].split("#")[0]}
                    </p>
                  </span>
                  <span>
                    <p
                      style={{
                        width: bottomPrimaryCapWidth + "%",
                      }}
                    >
                      {captions.primary[currentCaption].split("#")[1]}
                    </p>
                  </span>
                </div>
                <div
                  className="caption-secondary"
                  style={{ opacity: secondaryOpacity }}
                >
                  {captions.secondary[currentCaption]}
                </div>
              </div>
            </div>

            <div className="billboard-btns">
              <div className="billboad-inquiry">
                <button>
                  <Link
                    to="/application"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Inquiry Now
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="billboard-img d-flex" style={{ right: "0" }}>
            <div className="billboard-banner-wrapper">
              <div className="billboard-banner-img w-100">
                <img src="/assets/img/banner-img.jpg" />
              </div>

              <div className="billboard-banner-text p-3">
                With years of extensive experience, Bune Education Consultancy
                stands as a trailblazer in education counseling in Nepal. Reach
                out to us today and schedule your consultation session!
              </div>
            </div>

            <div className="billboard-img-wrapper">
              <img src="/assets/img/aboutus-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillBoard;
