import ItemHeading from "../ItemHeading";
import { Link } from "react-router-dom";
import Paragraph from "../Paragraph";

const AboutUs = () => {
  return (
    <>
      <div className="home-about position-relative d-flex justify-content-center mt-3">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25"
          style={{ left: "20%", top: "10%", opacity: "0.1" }}
        >
          <path
            fill="#FF0066"
            d="M37.2,-35.7C42.4,-23.3,36.5,-8.1,35.6,13.1C34.8,34.4,38.8,61.7,30.6,67.1C22.3,72.5,1.7,55.8,-21,44.5C-43.7,33.2,-68.5,27.3,-72.7,14.9C-77,2.4,-60.6,-16.4,-45,-31.2C-29.5,-46,-14.7,-56.8,0.7,-57.4C16.1,-57.9,32.1,-48.2,37.2,-35.7Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25"
          style={{ left: "0", top: "50%", opacity: "0.1" }}
        >
          <path
            fill="#FF0066"
            d="M19,-12.9C31.5,-12.2,53.2,-12.7,60.2,-5.8C67.2,1.2,59.5,15.5,51.8,30.8C44.1,46.1,36.3,62.3,22,72.7C7.8,83.2,-13,88,-31.9,83.1C-50.8,78.1,-67.8,63.5,-69.5,46.8C-71.3,30,-57.7,11.1,-51.7,-6.7C-45.6,-24.4,-47,-41.1,-39.6,-42.6C-32.3,-44.2,-16.1,-30.7,-6.4,-23C3.3,-15.3,6.6,-13.5,19,-12.9Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-50"
          style={{ left: "70%", top: "10%", opacity: "0.1" }}
        >
          <path
            fill="#FF0066"
            d="M55.6,-64.9C71.7,-52.8,84.1,-34.9,76.7,-21.7C69.3,-8.5,42,0,29,11.4C16.1,22.8,17.4,37,12.1,43.3C6.8,49.6,-5,48,-12.7,42C-20.3,36.1,-23.7,25.9,-27.9,16.9C-32.2,8,-37.1,0.3,-35.3,-5.6C-33.5,-11.5,-24.9,-15.5,-17.9,-29.2C-10.9,-42.9,-5.5,-66.3,7.1,-74.8C19.8,-83.3,39.5,-77,55.6,-64.9Z"
            transform="translate(100 100)"
          />
        </svg>

        <div
          className="home-about-wrapper m-auto pt-4"
          style={{ width: "1200px" }}
        >
          <ItemHeading
            primary="Welcome to Bune Education Consultancy"
            secondary="We, Your Educational Allies: Charting Success, Building Futures Together."
          />

          <Paragraph
            buttonState={true}
            buttonContent="Know more"
            para="Welcome to Bune Education Consultancy! Join us on a journey
                towards world-class education. Our experienced team guides
                students, unlocking global opportunities with personalized
                assistance. From choosing the right institution to navigating
                applications, we're your reliable partner. Embrace a
                transformative global education experience with Bune – turning
                aspirations into achievements."
            imgURL="/assets/img/group-students.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
