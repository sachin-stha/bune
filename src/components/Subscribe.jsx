import ItemHeading from "./ItemHeading";
import { Link, UNSAFE_DataRouterStateContext } from "react-router-dom";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

import "../css/Subscribe.css";

const Subscribe = () => {
  const [otpState, setOtpState] = useState("input");

  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);
  const [userOtpValue, setUserOtpValue] = useState("");

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const otpChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    if (index === 3) {
      if (value !== "") {
        const fullOTP = newOtp.join("");
        setUserOtpValue(fullOTP);
      }
    }
  };

  const otpKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const [values, setValues] = useState({ email: "" });
  const [actualOtp, setActualOtp] = useState("");
  const [otpMatch, setOtpMatch] = useState(true);
  const [submitState, setSubmitState] = useState(true);
  const [userAvailable, setUserAvailable] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, email: event.target.value });

    if (userAvailable) {
      setUserAvailable(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitState) {
      setSubmitState(false);
      setOtpState("loading");

      await axios.post("http://localhost:5000/send-otp", values);

      try {
        const response = await axios.post(
          "http://localhost:5000/send-otp",
          values
        );
        if (!response.data.userState) {
          setOtpState("otp");
          setActualOtp(response.data.otp_num);
          setUserAvailable(false);

          console.log(response.data.otp_num);
        } else {
          setOtpState("input");
          setSubmitState(true);
          setUserAvailable(true);
        }
      } catch (err) {
        throw err;
      }
    }
  };

  useEffect(() => {
    if (userOtpValue !== "" && otpState) {
      if (userOtpValue == actualOtp) {
        setOtpMatch(true);
        try {
          {
            axios.post("http://localhost:5000/subscriber", values);
            setOtpState("success");
            setSubmitState(true);
          }
        } catch (err) {
          throw err;
        }
      } else {
        setOtpMatch(false);
      }
    }
  }, [userOtpValue]);

  return (
    <>
      <div className="subscribe position-relative" style={{ zIndex: "1" }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-50"
          style={{
            left: "-30%",
            top: "-35%",
            opacity: "0.6",
          }}
        >
          <path
            fill="rgb(255,255,255)"
            d="M39.3,-49.5C47.9,-39.5,49.9,-24.3,56.2,-7.2C62.5,10,73.1,29.2,67.1,37.9C61.1,46.7,38.5,45.1,23.8,38.9C9.2,32.6,2.6,21.7,-12.6,21.8C-27.9,21.8,-51.9,32.8,-63.1,28.9C-74.3,25,-72.8,6.2,-62,-3.3C-51.3,-12.9,-31.3,-13.2,-19.5,-22.7C-7.6,-32.1,-3.8,-50.7,5.8,-57.5C15.3,-64.4,30.6,-59.5,39.3,-49.5Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25"
          style={{ left: "20%", top: "30%" }}
        >
          <path
            fill="rgb(255,255,255)"
            d="M41.1,-34.6C49.8,-21.8,51,-5,44.8,5.4C38.6,15.8,24.9,19.6,14.1,22C3.3,24.4,-4.7,25.4,-16.4,23.7C-28,22,-43.3,17.7,-51.5,5.1C-59.7,-7.5,-60.7,-28.3,-50.9,-41.4C-41.1,-54.4,-20.6,-59.6,-2.2,-57.8C16.2,-56.1,32.4,-47.4,41.1,-34.6Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-25"
          style={{ left: "80%", opacity: "0.6" }}
        >
          <path
            fill="rgb(255,255,255)"
            d="M34.5,-40.8C50.2,-36.1,72.2,-33.3,81.8,-22.2C91.4,-11.2,88.5,8.3,77,19.3C65.6,30.2,45.5,32.6,31.2,32.9C17,33.1,8.5,31.2,-4.1,36.8C-16.7,42.5,-33.3,55.6,-42.9,53.8C-52.4,52.1,-54.9,35.4,-51.3,22.4C-47.6,9.4,-37.7,0.2,-36.3,-14.1C-34.9,-28.4,-41.8,-47.8,-37.2,-56.2C-32.5,-64.5,-16.3,-61.8,-3.4,-57.1C9.4,-52.3,18.8,-45.6,34.5,-40.8Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="subscribe-wrapper pt-5">
          <ItemHeading
            primary="Your Career Begins Here"
            secondary="Subscribe to receive our exclusive bune education emails."
          />

          <div className="subscribe-content pt-3">
            <div className="subscribe-input d-flex align-items-center justify-content-center">
              <form
                className="subscribe-input-wrapper d-flex align-items-center justify-content-center mb-4 position-relative"
                onSubmit={handleSubmit}
                style={{
                  height: otpState != "input" && "fit-content",
                  flexDirection: "column",
                }}
              >
                <div
                  className="subscribe-email-container align-items-center justify-content-center w-100 h-100"
                  style={{ display: otpState == "input" ? "flex" : "none" }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                  <button className="subscribe-btn" type="submit">
                    Subscribe
                  </button>
                </div>

                <div
                  className="subscribe-loading h-100"
                  style={{ display: otpState == "loading" ? "block" : "none" }}
                >
                  <img
                    src="/src/assets/img/loading.gif"
                    alt=""
                    style={{ height: "70px" }}
                  />
                </div>

                <div
                  className="subscribe-success-message h-100"
                  style={{ display: otpState == "success" ? "block" : "none" }}
                >
                  <h1 className="text-center">
                    <span>Congratulations</span>, you're now a subscriber!
                  </h1>
                </div>

                <div
                  className="subscribe-otp-container h-100"
                  style={{ display: otpState == "otp" ? "block" : "none" }}
                >
                  <section className="">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => otpChange(e, index)}
                        onKeyDown={(e) => otpKeyDown(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className="mx-2"
                        style={{ borderColor: otpMatch ? "black" : "red" }}
                      />
                    ))}
                  </section>
                </div>

                <p
                  className="mt-1 text-center position-absolute top-100"
                  style={{ display: (userAvailable || !otpMatch) && "flex" }}
                >
                  {userAvailable
                    ? "User already a subscriber"
                    : !otpMatch
                    ? "Warning: Incorrect OTP"
                    : ""}
                </p>
              </form>

              <p className="text-center subscribe-extra-p">
                {otpState == "otp"
                  ? "We've sent a One-Time Password (OTP) to your email. Please enter it in the designated box."
                  : otpState == "success"
                  ? "Welcome! You're now a member of Bune Education Consultancy."
                  : "Receive expert insights regularly in your inbox from Bune Education Consultancy."}
              </p>
            </div>
          </div>
        </div>

        <div
          className="curved-line w-100 position-relative"
          style={{ height: "fit-content", pointerEvents: "none", zIndex: "50" }}
        >
          <img src="/assets/img/curved_line.png" alt="" className="w-100" />
        </div>
      </div>
    </>
  );
};

export default Subscribe;
