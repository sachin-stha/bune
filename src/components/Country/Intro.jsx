import { useState, useEffect, useContext } from "react";
import MyContext from "../../MyContext";

import "../../css/Country/Intro.css";

const Intro = (props) => {
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((currentItem) => (currentItem + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentItem]);

  const { breakpoints } = useContext(MyContext);
  const {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isExtraVeryLarge,
  } = breakpoints;

  const [translateVal, setTranslateVal] = useState(408);
  useEffect(() => {
    setTranslateVal((translateVal) =>
      isLarge || isExtraLarge || isExtraVeryLarge
        ? 408
        : isMedium || isSmall
        ? 358
        : 328
    );
  }, [breakpoints]);

  return (
    <>
      <div className="country-page-section-contents-wrapper d-flex">
        <div className="country-page-para">
          <p className="mb-2">{props.para.split("#")[0]}</p>
          <p>{props.para.split("#")[1]}</p>
        </div>

        <div className="country-page-slider">
          <div className="country-page-slider-wrapper position-relative">
            <ul
              className="d-flex list-unstyled"
              style={{
                transform:
                  "translate(-" + currentItem * translateVal + "px, 0)",
              }}
            >
              {props.imgURL.map((e, i) => (
                <li className="position-relative mx-1" key={i}>
                  <div
                    className="country-page-slide position-absolute top-0 left-0 w-100 h-100"
                    style={{ backgroundImage: props.imgURL[i] }}
                  ></div>

                  <div className="country-page-slide-gradient position-absolute top-0 left-0 w-100 h-100"></div>

                  <div className="country-page-slide-caption position-absolute left-0 bottom-0">
                    <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                    {props.placename[i]}
                  </div>
                </li>
              ))}
            </ul>
            <div className="country-page-slider-btn position-absolute top-0 left-0 h-100 d-flex justify-content-between align-items-center">
              <button
                className="bg-transparent border-0"
                onClick={() =>
                  setCurrentItem((currentItem) =>
                    currentItem == 0 ? (currentItem = 2) : currentItem - 1
                  )
                }
              >
                <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
              </button>
              <button
                className="bg-transparent border-0"
                onClick={() =>
                  setCurrentItem((currentItem) => (currentItem + 1) % 3)
                }
              >
                <i
                  className="fa fa-chevron-circle-right"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
