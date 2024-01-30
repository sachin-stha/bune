import ItemHeading from "../ItemHeading";
import { useState, useEffect, useContext } from "react";
import MyContext from "../../MyContext";

import "../../css/Home/FeedBack.css";

const FeedBack = () => {
  const { breakpoints } = useContext(MyContext);
  const {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isExtraVeryLarge,
  } = breakpoints;

  const feedbacks = {
    name: ["Rashila Dahal", "Shova Bhandari", "Bhawana Khadka"],
    faculty: ["B.Sc. Nursing", "B.Sc. Nursing", "Engineering"],
    para: [
      "It is really gives me immense pleasure to say that I have applied for my studies from Bune Education Consultancy. The experience I shared at my time at Bune Education Consultancy was wonderful. It helped me excel my knowledge and interest in my desired country, Australia. I particularly appreciate the time that Bune Education Consultancy takes to give potential students the best possible advice and the support they provide in respect to admission and visa applications. Thank you Bune Education Consultancy team and I would like to recommend Bune Education Consultancy to all my friends in Nepal.",
      "Bune Education Consultancy is a great place to be in. It is one of the best education consultancy. I have ever come across. They have an excellent team and I'm quite impressed with their professional approach. Since, they have knowledge about what's happening in the market, they provide you a complete information about the ongoing subjects that will help you for you further processing. So, I would like everybody to visit the consultancy and see the service they provide for yourself.",
      "Since there are a lot of consultancies in Nepal, it might be hard and confusing to select the best education consultancy in Nepal one in your convenience. But after visiting lot of consultancy, I came across Bune Education Consultancy and it has successfully proved its worth to me. I went to Bune Education Consultancy for proper educational guidelines and trust me it was the best educational consultancy in Nepal that I have come across. Their approach towards education, their vast network connection, and the ambience is great. I would like the entire fellow person to visit this consultancy to clear their doubts.",
    ],
  };

  const [currentItem, setCurrentItem] = useState(0);
  const [itemChangeState, setItemChangeState] = useState(true);
  const [translateSlideVal, setTranslateSlideVal] = useState(582);

  const prevItem = () => {
    setCurrentItem((currentItem) =>
      currentItem > 0 ? currentItem - 1 : (currentItem = 1)
    );
  };

  const nextItem = () => {
    setCurrentItem(
      (currentItem) =>
        (currentItem + 1) % (isExtraVeryLarge || isExtraLarge ? 2 : 3)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (itemChangeState) nextItem();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentItem, itemChangeState]);

  useEffect(() => {
    setTranslateSlideVal(
      isLarge || isMedium ? 652 : isSmall ? 452 : isExtraSmall ? 352 : 582
    );
  }, [isLarge, isMedium, isSmall, isExtraSmall]);

  return (
    <>
      <div className="feedback my-5 pt-3 position-relative">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className=""
          style={{ opacity: "0.2", left: "50%", width: "40%" }}
        >
          <path
            fill="#FF0066"
            d="M28.1,-50.8C39.4,-42.1,53.6,-40.6,66,-33.3C78.4,-26.1,89,-13,84.8,-2.4C80.6,8.2,61.5,16.3,50.6,26.2C39.7,36.1,37,47.7,29.9,57.8C22.8,67.9,11.4,76.5,2,73C-7.4,69.5,-14.7,53.9,-28,47.3C-41.2,40.8,-60.4,43.4,-72.5,37C-84.7,30.6,-90,15.3,-80.6,5.4C-71.3,-4.5,-47.4,-9.1,-37.9,-20.1C-28.5,-31.2,-33.5,-48.9,-29.5,-61.9C-25.6,-74.9,-12.8,-83.2,-2.2,-79.4C8.4,-75.6,16.8,-59.6,28.1,-50.8Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="feedback-wrapper">
          <ItemHeading
            primary="What Our Students Are Saying"
            secondary="We've facilitated students worldwide, ensuring they embrace their student life to the fullest."
          />

          <div className="feeback-items d-flex justify-content-center align-items-center">
            <div className="feedback-items-wrapper">
              <div
                className="feedback-items-slider d-flex"
                style={{
                  width: 100 * feedbacks.name.length + "%",
                  transform:
                    "translate(-" + currentItem * translateSlideVal + "px, 0)",
                }}
              >
                {feedbacks.name.map((e, i) => (
                  <div
                    className="feedback-items-slide position-relative mx-3 bg-white"
                    key={i}
                  >
                    <div className="feedback-items-content">
                      <i
                        className="fa fa-quote-left d-block mb-3"
                        aria-hidden="true"
                      ></i>
                      <p className="name">{feedbacks.name[i]}</p>
                      <p className="faculty">{feedbacks.faculty[i]}</p>
                      <p className="para">{feedbacks.para[i]}</p>
                      <i
                        className="fa fa-quote-right d-block text-end"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="feedback-items-buttons position-absolute d-flex align-items-center justify-content-between">
              <button
                className="feedback-items-prev-btn"
                onClick={() => prevItem()}
              >
                <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
              </button>
              <button
                className="feedback-items-next-btn"
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

export default FeedBack;
