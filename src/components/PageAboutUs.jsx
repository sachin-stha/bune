import PageLocationBanner from "./PageLocationBanner";
import MyContext from "../MyContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemHeading from "./ItemHeading";
import Inquiry from "./Inquiry";
import Paragraph from "./Paragraph";

import "../css/PageAboutUs.css";
import Subscribe from "./Subscribe";

const PageAboutUs = () => {
  const { breakpoints, currentPage } = useContext(MyContext);

  const serviceItems = {
    imgURL: [
      "/assets/img/services/success.png",
      "/assets/img/services/counselling.png",
      "/assets/img/services/test.png",
      "/assets/img/services/time.png",
      "/assets/img/services/university.png",
      "/assets/img/services/infrastructure.png",
    ],
    primaryCaption: [
      "High Visa Success",
      "Top-notch Guidance",
      "Test Guidance",
      "Quick Service",
      "Institutional Meet-ups",
      "Infrastructure & Support",
    ],
    secondaryCaption: [
      "Our continuous awareness of recent visa changes ensures superior documentation knowledge for our students.",
      "Emphasizing crafting your ideal career, prioritizing personal goals over merely selecting courses and universities.",
      "Guiding success in PTE, IELTS, TOEFL exams for effective language proficiency and admissions preparation.",
      "Swift outcomes with timely application updates and consistent follow-ups for student progress and satisfaction.",
      "Direct meetings with university reps provide firsthand, up-to-date information for students' benefit and awareness.",
      "Outstanding infrastructure and friendly support make us the preferred consultancy for content students in Nepal.",
    ],
  };

  return (
    <>
      <title>Bune Education Consultancy | Home</title>
      <div className="page-about-us position-relative">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25 position-absolute"
          style={{ opacity: "0.1", top: "5%", left: "0" }}
        >
          <path
            fill="#FF0066"
            d="M56.7,-27C59.3,-10.6,37.3,5.3,14.4,22.6C-8.6,39.9,-32.4,58.7,-41.6,53C-50.8,47.4,-45.3,17.2,-35.9,-8.6C-26.5,-34.4,-13.2,-55.8,6.9,-58.1C27.1,-60.3,54.2,-43.4,56.7,-27Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25 position-absolute"
          style={{ opacity: "0.1", top: "10%", left: "40%" }}
        >
          <path
            fill="#FF0066"
            d="M7.5,-16.5C8.7,-9.4,8.1,-5.9,8.5,-3.1C8.9,-0.3,10.3,1.7,13.9,8.7C17.4,15.7,23.1,27.6,21.1,36C19.2,44.4,9.6,49.2,1.4,47.3C-6.8,45.4,-13.7,36.8,-18.2,29.3C-22.6,21.7,-24.7,15.2,-33.9,6.4C-43,-2.4,-59.2,-13.4,-59.1,-20.9C-59,-28.3,-42.6,-32.2,-30,-35.6C-17.4,-39,-8.7,-42,-2.8,-38.1C3.1,-34.3,6.2,-23.6,7.5,-16.5Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25 position-absolute"
          style={{ opacity: "0.1", top: "20%", left: "10%" }}
        >
          <path
            fill="#FF0066"
            d="M44.7,-51.6C55.3,-53.9,59.3,-37.3,59.9,-22.5C60.4,-7.8,57.5,5,53.5,17.4C49.5,29.8,44.3,41.9,35.2,49.8C26.1,57.7,13.1,61.4,4.9,54.7C-3.2,47.9,-6.5,30.6,-10,20.9C-13.6,11.2,-17.5,9.1,-21,5.2C-24.5,1.3,-27.7,-4.4,-30.6,-14.4C-33.5,-24.5,-36.2,-39,-31.1,-38.5C-25.9,-38,-13,-22.4,2.1,-25.2C17.1,-28.1,34.2,-49.3,44.7,-51.6Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25 position-absolute"
          style={{ opacity: "0.2", top: "0%", right: "5%" }}
        >
          <path
            fill="#FF0066"
            d="M37.8,-28.2C41.7,-15,32.6,-0.7,24.2,17C15.7,34.7,7.8,55.7,-0.7,56.2C-9.3,56.6,-18.6,36.3,-30.3,16.8C-41.9,-2.7,-56,-21.6,-51.3,-35.2C-46.7,-48.7,-23.3,-57,-3.2,-55.2C16.9,-53.3,33.9,-41.3,37.8,-28.2Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-50 position-absolute"
          style={{ top: "15%", right: "0%", opacity: "0.1" }}
        >
          <path
            fill="#FF0066"
            d="M13.7,-21.5C20.3,-10.7,30.2,-8.9,40.2,0C50.1,8.8,60.3,24.7,54.3,28C48.4,31.2,26.5,21.8,10.1,27.8C-6.3,33.8,-17,55.1,-27.2,58.5C-37.5,61.9,-47.1,47.3,-52.4,32.8C-57.7,18.3,-58.7,3.9,-57.3,-11.2C-55.9,-26.2,-52.1,-41.9,-42.2,-52.1C-32.2,-62.4,-16.1,-67.1,-6.3,-59.6C3.5,-52.1,7,-32.3,13.7,-21.5Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25 position-absolute"
          style={{ left: "10%", top: "40%", opacity: "0.1" }}
        >
          <path
            fill="#FF0066"
            d="M50.1,-67C65.1,-58.2,77.4,-43.6,75.1,-29.4C72.8,-15.2,56,-1.2,50.6,16.9C45.3,35,51.5,57.2,45,63.2C38.5,69.2,19.2,59,4.2,53.2C-10.8,47.3,-21.6,45.9,-27.8,39.8C-34,33.7,-35.6,22.9,-39.1,12.6C-42.5,2.3,-47.8,-7.5,-46.7,-16.5C-45.7,-25.6,-38.2,-34,-29.3,-44.7C-20.5,-55.5,-10.2,-68.7,3.7,-73.8C17.6,-78.8,35.2,-75.8,50.1,-67Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25 position-absolute"
          style={{ right: "15%", top: "45%", opacity: "0.1" }}
        >
          <path
            fill="#FF0066"
            d="M22.5,-31.5C26.6,-28,25.7,-18,34,-7.5C42.3,3,59.7,14,62.5,24.9C65.3,35.7,53.3,46.4,40.5,51.5C27.6,56.7,13.8,56.3,5.1,49.2C-3.6,42.2,-7.2,28.5,-11.1,20.4C-15,12.4,-19.3,10,-27.8,4.2C-36.4,-1.6,-49.2,-10.9,-51.9,-21.3C-54.6,-31.6,-47.1,-43.1,-36.8,-44.6C-26.4,-46.1,-13.2,-37.7,-2,-34.9C9.2,-32.1,18.4,-35,22.5,-31.5Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="page-about-us-wrapper">
          <PageLocationBanner heading="About Us" location="Home/About Us" />

          <div className="page-about-us-content">
            <div
              className="page-about-us-first-row mt-4 mx-auto"
              style={{ maxWidth: "1200px" }}
            >
              <div className="page-about-us-first-row-wrapper mx-auto">
                <ItemHeading
                  primary="Who are we?"
                  secondary="Guiding you as a friend, our consultancy enriches your education experience."
                />

                <Paragraph
                  buttonState={false}
                  para="Bune Consultancy is your committed ally in the dynamic
                    realms of education and career advancement. As trusted
                    friends, we offer tailored guidance and unwavering support
                    to ensure each decision aligns seamlessly with your
                    aspirations. Whether you're a student exploring educational
                    paths or a professional seeking career growth, Bune
                    Consultancy stands by you as a reliable partner. Experience
                    a transformative journey where excellence, integrity, and
                    true friendship converge for your success."
                  imgURL="/assets/img/foreign-education.jpg"
                  textAlign="center"
                  imagePosition="left"
                />
              </div>
            </div>

            <div
              className="page-about-us-second-row mt-5 pt-3 mx-auto"
              style={{ maxWidth: "1200px" }}
            >
              <div className="page-about-us-second-row-wrapper mx-auto">
                <ItemHeading
                  primary="Our mission"
                  secondary="Empowering Success: Guiding Dreams, Shaping Futures, Achieving Excellence Together."
                />

                <Paragraph
                  buttonState={false}
                  para="At Bune Education Consultancy, our mission is to serve as
                    your dedicated partner in the pursuit of academic and
                    professional excellence. We are committed to empowering
                    individuals by providing personalized guidance and
                    unwavering support. Our mission extends beyond consultancy;
                    it embodies the belief that every educational and career
                    journey is unique. Through a blend of expertise and genuine
                    care, we aim to guide you towards fulfilling your dreams and
                    shaping a future marked by success. Bune Education
                    Consultancy is not just a service; it's a commitment to
                    being your steadfast ally as you navigate the pathways of
                    education and career development."
                  imgURL="/assets/img/woman-standing.webp"
                  textAlign="center"
                  imagePosition="right"
                />
              </div>
            </div>

            <div className="page-about-us-third-row mt-5 pt-3 mb-5 pb-3 mx-auto">
              <div className="page-about-us-third-row-wrapper">
                <ItemHeading
                  primary="Why choose us?"
                  secondary="Pinnacle service: Tailored guidance, proven success in education consultancy excellence."
                />

                <div className="page-about-us-service-items-wrapper mx-auto">
                  <ul className="list-unstyled d-grid">
                    {serviceItems.imgURL.map((e, i) => (
                      <li
                        key={i}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <div className="page-about-us-service-item-image">
                          <img src={serviceItems.imgURL[i]} />
                        </div>

                        <div className="page-about-us-primary-caption text-center mt-2">
                          {serviceItems.primaryCaption[i]}
                        </div>

                        <div className="page-about-us-secondary-caption text-center">
                          {serviceItems.secondaryCaption[i]}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Subscribe />
            <Inquiry />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAboutUs;
