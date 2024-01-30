import { useIsFirstRender } from "@uidotdev/usehooks";
import MyContext from "../MyContext";
import { useContext } from "react";

import "../css/Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const { address, contactNo, email } = useContext(MyContext);

  const country = [
    "Portugal",
    "Uk",
    "Canada",
    "Romania",
    "Croatia",
    "Malta",
    "Bangladesh",
  ];

  const usefulLinks = ["About Us", "Contact Us", "Inquiry Now", "Blogs"];

  const socialMedia = {
    names: ["Facebook", "Twitter", "Linkedin", "Youtube", "Instagram"],
    links: ["/", "/", "/", "/", "/"],
    icons: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-linkedin",
      "fa fa-youtube",
      "fa fa-instagram",
    ],
  };

  return (
    <>
      <div className="footer">
        <div className="footer-wrapper m-auto">
          <div className="footer-contents w-100 d-flex">
            <div className="footer-first-column footer-column d-flex">
              <div className="footer-company-details">
                <div className="footer-logo">
                  <img src="/assets/img/company_name_white.png" alt="logo" />
                </div>
                <div className="footer-outro">
                  <p>
                    Thank you for exploring the possibilities with Bune
                    Education Consultancy. As you embark on your educational
                    journey, remember that success is not just a destination;
                    it's a continuous pursuit. With Bune by your side, your
                    academic aspirations are in capable hands. Let's sculpt your
                    educational future together. Trust Bune – Your Catalyst for
                    Educational Excellence!
                  </p>
                </div>

                <div className="footer-social-media-links">
                  <ul className="list-unstyled d-flex">
                    {socialMedia.names.map((e, i) => (
                      <li className="footer-social-media-item" key={i}>
                        <Link to={socialMedia.links[i]}>
                          <i
                            className={socialMedia.icons[i]}
                            aria-hidden="false"
                          ></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="footer-useful-links">
                <div className="footer-items-heading">Useful Links</div>

                <ul className="list-unstyled">
                  {usefulLinks.map((e, i) => (
                    <li className="footer-useful-links-item" key={i}>
                      <Link
                        to={
                          e == "Inquiry Now"
                            ? "/application"
                            : e == "Blogs"
                            ? "#"
                            : e.toLowerCase().replace(/\s+/g, "")
                        }
                      >
                        {e}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="footer-second-column footer-column d-flex">
              <div className="footer-country-destinations">
                <div className="footer-items-heading">Destination Country</div>

                <ul className="list-unstyled">
                  {country.map((e, i) => (
                    <li className="footer-destination-country-item" key={i}>
                      <Link to={e.toLowerCase().replace(/\s+/g, "")}>{e}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-extra d-flex">
                <div className="footer-address">
                  <div className="footer-items-heading">Address</div>

                  <div className="footer-address-content">
                    <p>
                      <i
                        className="fa fa-map-marker me-2"
                        aria-hidden="true"
                      ></i>
                      {address}
                    </p>

                    <button className="footer-view-location">
                      <Link to="https://maps.app.goo.gl/TaBAZ9YK8mFiaduK7">
                        View Location
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="footer-contact mt-3">
                  <div className="footer-items-heading">Contacts</div>

                  <div className="footer-phone-no">
                    <p>
                      <i className="fa fa-phone me-2" aria-hidden="true"></i>
                      <a href="tel:+91 7478019619">{contactNo}</a>
                    </p>
                  </div>

                  <div className="footer-mail">
                    <p>
                      <i className="fa fa-envelope me-2" aria-hidden="true"></i>
                      <a href="mailto:info@bengaleducation.co.in">{email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="copyright text-center text-white"
          style={{
            opacity: "0.8",
            fontFamily: "var(--theme-font)",
            textDecoration: "underline",
            paddingBottom: "50px",
          }}
        >
          <i className="fa fa-copyright me-2" aria-hidden="true"></i>2023-
          BuneEducationConsultancy. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
