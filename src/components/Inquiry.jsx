import ItemHeading from "./ItemHeading";
import axios from "axios";

import "../css/Inquiry.css";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import MyContext from "../MyContext";

import * as data from "./Country/Countries.json";

const Inquiry = (props) => {
  const { country } = useContext(MyContext);

  const info = data;

  const items = {
    name: country,
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

  let location = useLocation();
  const [cPage, setCpage] = useState(location.pathname);
  useEffect(() => {
    setCpage((cPage) => location.pathname);
  }, [location.pathname]);

  const courses = [
    "Hotel Management in Australia",
    "Master’s of Business Administration (MBA) in Australia",
    "Data Science in Australia",
    "Nursing in Australia",
  ];

  const [values, setValues] = useState({
    name: "",
    mob_number: "",
    email: "",
    education_level: "",
    courses: "",
    percentage: "",
    age: "",
    message: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let tempObj = { countries: "" };
    document.getElementsByName("checkboxes").forEach((e, i) => {
      e.checked && (tempObj.countries += e.value + ",");
    });

    tempObj.countries = [tempObj.countries];
    let combined = { ...tempObj, ...values };

    axios
      .post("http://localhost:5000/applications", combined)
      .then(() => console.log("inserted sucess"))
      .catch((err) => new Error("This is an Error"));
  };

  return (
    <>
      <div
        className="inquiry position-relative"
        style={{ zIndex: "1", paddingTop: cPage != "/" && "50px" }}
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25"
          style={{ left: "-10%", top: "10%" }}
        >
          <path
            fill="#ffffff"
            d="M21.9,-36.3C30,-24.3,39.2,-20,44.6,-12.4C50.1,-4.7,51.7,6.3,50.8,18.9C50,31.5,46.7,45.6,37.8,45.3C28.9,44.9,14.5,30.2,4.1,24.5C-6.3,18.9,-12.5,22.4,-19.8,22.2C-27,22,-35.2,18,-46.1,9.1C-57.1,0.2,-70.9,-13.7,-73.3,-29.2C-75.6,-44.6,-66.4,-61.7,-52.3,-71.8C-38.2,-81.9,-19.1,-84.9,-6.1,-76.5C6.9,-68.1,13.8,-48.3,21.9,-36.3Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-50"
          style={{ left: "80%" }}
        >
          <path
            fill="#ffffff"
            d="M21.9,-36.3C30,-24.3,39.2,-20,44.6,-12.4C50.1,-4.7,51.7,6.3,50.8,18.9C50,31.5,46.7,45.6,37.8,45.3C28.9,44.9,14.5,30.2,4.1,24.5C-6.3,18.9,-12.5,22.4,-19.8,22.2C-27,22,-35.2,18,-46.1,9.1C-57.1,0.2,-70.9,-13.7,-73.3,-29.2C-75.6,-44.6,-66.4,-61.7,-52.3,-71.8C-38.2,-81.9,-19.1,-84.9,-6.1,-76.5C6.9,-68.1,13.8,-48.3,21.9,-36.3Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25"
          style={{ left: "70%", bottom: "0%", opacity: "0.6" }}
        >
          <path
            fill="#ffffff"
            d="M12.4,-19.7C17.6,-13.4,24.2,-11.7,36.2,-4.7C48.3,2.4,65.9,14.7,66.4,24.2C67,33.7,50.5,40.3,36.6,43.9C22.7,47.4,11.3,48.1,-1.3,49.9C-14,51.7,-27.9,54.7,-35.1,48.9C-42.2,43.1,-42.6,28.5,-41.6,17C-40.5,5.4,-38.2,-3.1,-37.8,-14.8C-37.4,-26.5,-39.1,-41.3,-33.1,-47.4C-27.2,-53.4,-13.6,-50.8,-5,-43.9C3.7,-37.1,7.3,-26.1,12.4,-19.7Z"
            transform="translate(100 100)"
          />
        </svg>

        <div
          className="inquiry-wrapper position-relative"
          style={{ zIndex: "3" }}
        >
          <ItemHeading
            // primary="Please drop your Inquiry here."
            primary={props.primary}
            secondary="Complete the form for consultation and inquiry; an adviser will email you shortly."
          />

          <div className="inquiry-contents ">
            <div className="inquiry-contents-wrapper m-auto">
              <form onSubmit={handleSubmit}>
                <div className="inquiry-input-group pb-4">
                  <section>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      id="name"
                      onChange={handleChange}
                    />
                  </section>

                  <section>
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      name="mob_number"
                      id="mob_number"
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      id="email"
                      onChange={handleChange}
                    />
                  </section>

                  <section>
                    <select
                      id="education_level"
                      name="education_level"
                      onChange={handleChange}
                    >
                      <option value="">Education Level</option>
                      <option value="+2">+2</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="master">Master</option>
                    </select>

                    <select id="courses" name="courses" onChange={handleChange}>
                      <option value="">Courses</option>
                      {courses.map((e, i) => (
                        <option value={e} key={i}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </section>

                  <section>
                    <input
                      type="text"
                      placeholder="Percentage"
                      name="percentage"
                      id="percentage"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Age"
                      name="age"
                      id="age"
                      onChange={handleChange}
                    />
                  </section>
                </div>

                <div className="inquiry-select-country">
                  <p className="inqiry-select-country-heading">
                    Select your dream destination?
                  </p>

                  <div className="inquiry-country-checkboxes-wrapper list-unstyled">
                    {items.name.map((e, i) => (
                      <li className="inquiry-country-checkbox" key={i}>
                        <label>
                          <input
                            type="checkbox"
                            name={"checkboxes"}
                            id={"checkbox-" + e}
                            value={e}
                          />
                          <div className="checkbox-content ">
                            <img src={items.flagImg[i]} />
                            <p>{"Study in " + items.name[i]}</p>
                          </div>
                        </label>
                      </li>
                    ))}
                  </div>
                </div>

                <div className="inquiry-textarea-wrapper py-4">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message here..."
                    cols="30"
                    rows="5"
                    className="w-100"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="inquiry-submit mx-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
