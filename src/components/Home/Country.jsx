import { Link } from "react-router-dom";
import ItemHeading from "../ItemHeading";
import { useState, useEffect, useContext } from "react";
import MyContext from "../../MyContext";

import "../../css/Home/Country.css";

import * as data from "../Country/Countries.json";

const Country = () => {
  const info = data;

  const { breakpoints, country } = useContext(MyContext);
  const {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isExtraVeryLarge,
  } = breakpoints;

  const items = {
    name: country,
    img: [
      data["portugal"]["sliderImg"],
      data["uk"]["sliderImg"],
      data["canada"]["sliderImg"],
      data["romania"]["sliderImg"],
      data["croatia"]["sliderImg"],
      data["malta"]["sliderImg"],
      data["bangladesh"]["sliderImg"],
    ],
    flagImg: [
      data["portugal"]["flagImg"],
      data["uk"]["flagImg"],
      data["canada"]["flagImg"],
      data["romania"]["flagImg"],
      data["croatia"]["flagImg"],
      data["malta"]["flagImg"],
      data["bangladesh"]["flagImg"],
    ],
  };

  const [currentItem, setCurrentItem] = useState(0);
  const [itemChangeState, setItemChangeState] = useState(true);
  const [translateSlideVal, setTranslateSlideVal] = useState(350);

  const prevItem = () => {
    setCurrentItem((currentItem) =>
      currentItem > 0
        ? currentItem - 1
        : (currentItem =
            isLarge || isMedium ? 5 : isSmall || isExtraSmall ? 6 : 4)
    );
  };

  const nextItem = () => {
    setCurrentItem(
      (currentItem) =>
        (currentItem + 1) %
        (isLarge || isMedium ? 6 : isSmall || isExtraSmall ? 7 : 5)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (itemChangeState) nextItem();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentItem, itemChangeState]);

  useEffect(() => {
    setTranslateSlideVal(isSmall || isLarge ? 450 : isExtraSmall ? 350 : 366);
  }, [isSmall, isLarge]);

  return (
    <>
      <div className="country mt-5 pt-3 position-relative">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25"
          style={{
            opacity: "0.2",
            right: "0%",
          }}
        >
          <path
            fill="#FF0066"
            d="M57.3,-18.6C64.8,4.4,54.8,33,39.1,41.6C23.3,50.2,1.8,38.6,-12.3,26.2C-26.4,13.7,-33.2,0.4,-29.9,-16.8C-26.6,-34,-13.3,-55,5.8,-56.9C24.9,-58.8,49.9,-41.5,57.3,-18.6Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25"
          style={{
            opacity: "0.1",
            left: "0",
            top: "25%",
          }}
        >
          <path
            fill="#FF0066"
            d="M13.6,-14C23.6,-7.9,41.6,-9.2,50.4,-2.5C59.1,4.1,58.5,18.8,52.5,31.3C46.5,43.9,35,54.2,22.4,56.7C9.8,59.2,-3.9,53.9,-20.1,50.2C-36.4,46.5,-55.1,44.6,-65.2,34.2C-75.3,23.8,-76.7,5,-73.6,-13C-70.5,-31.1,-62.8,-48.4,-49.8,-54C-36.8,-59.5,-18.4,-53.4,-8.3,-43.5C1.9,-33.7,3.7,-20.2,13.6,-14Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="country-wrapper">
          <ItemHeading
            primary="Choose you Dream Destination"
            secondary="We are partnered with numerous Institutions all over the world."
          />

          <div className="country-carousel-items d-flex justify-content-center position-relative w-100 mt-4">
            <div className="country-carousel-items-wrapper">
              <div
                className="country-carousel-slider d-flex"
                style={{
                  width: items.name.length * 100 + "%",
                  transform:
                    "translate(-" + currentItem * translateSlideVal + "px, 0)",
                }}
              >
                {items.name.map((e, i) => (
                  <div
                    className="country-carousel-slides position-relative mx-2"
                    key={i}
                  >
                    <Link
                      to={e.toLowerCase()}
                      onMouseOver={() => setItemChangeState(false)}
                      onMouseLeave={() => setItemChangeState(true)}
                    >
                      <div
                        className="country-slides-wrapper h-100 w-100"
                        style={{ backgroundImage: items.img[i] }}
                      ></div>
                      <div className="country-slides-gradient position-absolute w-100 h-100 top-0"></div>
                      <div className="country-slides-content position-absolute ps-4 pt-2 pb-3 d-flex align-items-center">
                        <div className="country-slides-country-flag me-2">
                          <img src={items.flagImg[i]} />
                        </div>
                        <div className="country-slides-caption">
                          Study in {e}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="country-carousel-buttons position-absolute d-flex align-items-center justify-content-between">
              <button
                className="country-carousel-prev-btn"
                onClick={() => prevItem()}
              >
                <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
              </button>
              <button
                className="country-carousel-next-btn"
                onClick={() => nextItem()}
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

export default Country;
