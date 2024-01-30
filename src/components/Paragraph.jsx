import "../css/Paragraph.css";

import { Link } from "react-router-dom";

const Paragraph = (props) => {
  return (
    <>
      <div className="paragraph-content-wrapper">
        <div className={"paragraph-content image-" + props.imagePosition}>
          <div style={{ textAlign: props.textAlign }}>
            <p className="my-0">{props.para}</p>
            <button
              type="button"
              className={"mt-4 " + (!props.buttonState && "d-none")}
            >
              <Link to="/aboutus">{props.buttonContent}</Link>
            </button>
          </div>

          <div className="paragraph-img ">
            <span
              style={{ backgroundImage: "url(" + props.imgURL + ")" }}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paragraph;
