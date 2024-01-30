import Inquiry from "./Inquiry";
import ItemHeading from "./ItemHeading";
import MyContext from "../MyContext";
import PageLocationBanner from "./PageLocationBanner";

import { useContext } from "react";

import "../css/PageContactUs.css";

const PageContactUs = () => {
  const { address, contactNo, email } = useContext(MyContext);

  const items = {
    icons: ["fa-map-marker", "fa-phone", "fa-envelope"],
    primary: ["Address", "Contact Number", "Email Address"],
    secondary: [address, contactNo, email],
  };

  return (
    <>
      <title>Bune Education Consultancy | Contact Us</title>
      <div className="contactus">
        <div className="contactus-wrapper">
          <PageLocationBanner heading="Contact Us" location="Home/Contact Us" />

          <div className="contactus-contents mt-3 pt-4">
            <ItemHeading
              primary="Contact us"
              secondary="Reach Out: Inquiries Welcome. We're Here to Assist You!"
            />

            <div className="contactus-contents-wrapper mx-auto my-5">
              <ul className="list-unstyled d-flex justify-content-around">
                <section className="d-flex justify-content-around">
                  <li className="d-flex align-items-center">
                    <i className={"fa " + items.icons[0]}></i>

                    <span className="contactus-item-primary">
                      {items.primary[0]}
                    </span>

                    <span className="contactus-item-secondary">
                      {items.secondary[0]}
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className={"fa " + items.icons[1]}></i>

                    <span className="contactus-item-primary">
                      {items.primary[1]}
                    </span>

                    <span className="contactus-item-secondary">
                      {items.secondary[1]}
                    </span>
                  </li>
                </section>
                <li className="d-flex align-items-center">
                  <i className={"fa " + items.icons[2]}></i>

                  <span className="contactus-item-primary">
                    {items.primary[2]}
                  </span>

                  <span className="contactus-item-secondary">
                    {items.secondary[2]}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Inquiry primary="Book a Free Session with Experts" />
        </div>
      </div>
    </>
  );
};

export default PageContactUs;
