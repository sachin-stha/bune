import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MyContext from "../MyContext";

import "../css/Header.css";

const Header = () => {
  const { breakpoints, country } = useContext(MyContext);
  const {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isExtraVeryLarge,
  } = breakpoints;

  const countryItems = country;

  const listItems = ["Home", "About Us", "Country", "Contact Us"];

  let location = useLocation();

  const [countryItemsState, setCountryItemsState] = useState(false);
  const [sidebarState, setSidebarState] = useState(false);
  const [cPage, setCpage] = useState(location.pathname);

  useEffect(() => {
    setCountryItemsState(false);
    setSidebarState(false);
  }, [isExtraLarge || isSmall]);

  useEffect(() => {
    setCpage((cPage) => location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div
        className="expeller vw-100 vh-100 bg-transparent top-0 start-0 position-absolute"
        style={{
          display:
            !(isExtraSmall || isSmall) && countryItemsState ? "block" : "none",
          zIndex: 99,
        }}
        onClick={() => setCountryItemsState(false)}
      ></div>

      <div
        className={
          "header w-100 position-relative " +
          (cPage != "/" && "header-page-changed")
        }
      >
        <div className="header-wrapper m-auto h-100 d-flex">
          <div className="header-logo-wrapper h-100 d-flex align-items-center">
            <Link to="/">
              <img
                src={
                  cPage == "/"
                    ? "/assets/img/company_name_white.png"
                    : "/assets/img/company_name_theme_color.png"
                }
                alt="logo"
              />
            </Link>
          </div>

          <div
            className="header-toggler h-100 align-items-center"
            style={{ display: isExtraSmall || isSmall ? "flex" : "none" }}
          >
            <i
              className="fa fa-bars"
              aria-hidden="false"
              onClick={() => setSidebarState(true)}
              style={{
                color: cPage != "/" ? "var(--main-theme-color)" : "white",
              }}
            ></i>
          </div>

          <div
            className="header-contents-wrapper d-flex"
            style={{
              transform:
                (isExtraSmall || isSmall) &&
                (sidebarState ? "translate(0, 0)" : "translate(100vw, 0)"),
            }}
          >
            <div className="header-list-wrapper d-flex w-100">
              <ul className="header-list list-unstyled d-flex">
                <div
                  className="toggled-header-top-row justify-content-between align-items-center"
                  style={{
                    display: isExtraSmall || isSmall ? "flex" : "none",
                  }}
                >
                  <div
                    className="toggle-header-top-row-logo"
                    style={{ display: countryItemsState ? "none" : "block" }}
                  >
                    <Link to="/">
                      <img
                        src="/assets/img/company_name_theme_color.png"
                        alt="logo"
                      />
                    </Link>
                  </div>

                  <div
                    className="toggler-header-top-row-toggler"
                    style={{ display: countryItemsState ? "none" : "block" }}
                  >
                    <i
                      className="fa fa-times"
                      aria-hidden="false"
                      onClick={() => setSidebarState(false)}
                    ></i>
                  </div>

                  <div
                    className="toggled-header-top-row-back-btn"
                    style={{ display: countryItemsState ? "block" : "none" }}
                  >
                    <button onClick={() => setCountryItemsState(false)}>
                      <i
                        className="fa fa-caret-left me-3"
                        aria-hidden="true"
                      ></i>
                      Back
                    </button>
                  </div>
                </div>

                {listItems.map((e, i) => (
                  <li
                    key={i}
                    className={
                      countryItemsState &&
                      (isExtraSmall || isSmall) &&
                      e != "Country"
                        ? "list-dismissed"
                        : ""
                    }
                  >
                    <Link
                      to={
                        e == "Home" ? "/" : e.toLowerCase().replace(/\s+/g, "")
                      }
                      onClick={(event) => {
                        if (e == "Country") {
                          event.preventDefault();
                          !countryItemsState &&
                            setCountryItemsState(!countryItemsState);
                        }

                        if (e != "Country") {
                          setCurrentPage(e);
                          setSidebarState(false);
                          setCountryItemsState(false);
                        }
                      }}
                    >
                      {e}
                    </Link>
                    {e == "Country" && (
                      <i
                        className={
                          isSmall || isExtraSmall
                            ? "fa fa-angle-right ms-2"
                            : "fa fa-angle-down ms-2"
                        }
                        style={{
                          display:
                            countryItemsState &&
                            (isSmall || isExtraSmall) &&
                            "none",
                        }}
                        aria-hidden="true"
                      ></i>
                    )}

                    {/* extra header country */}
                    {e == "Country" && (
                      <ul
                        className="extra-header-country list-unstyled position-absolute"
                        style={{
                          pointerEvents: countryItemsState && "auto",
                          opacity: countryItemsState && "1",
                        }}
                      >
                        {countryItems.map((e, i) => (
                          <li key={i}>
                            <Link
                              to={e.toLowerCase().replace(/\s+/g, "")}
                              onClick={() => {
                                setCurrentPage(e);
                                setCountryItemsState(false);
                                setSidebarState(false);
                              }}
                              className="w-100 h-100 d-block"
                            >
                              {e}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="header-btns-wrapper d-flex justify-content-wrapper align-items-center">
              <button
                className="me-2"
                style={{ display: isMedium && "none" }}
                onClick={() => {
                  setSidebarState(false);
                }}
              >
                <Link to="/application">Apply Now</Link>
              </button>
              <button
                onClick={() => {
                  setSidebarState(false);
                }}
              >
                <Link to="/application">Subscribe</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
