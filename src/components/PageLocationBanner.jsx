import { Link } from "react-router-dom";
import "../css/PageLocationBanner.css";

const PageLocationBanner = (props) => {
  return (
    <>
      <div className="page-location-banner">
        <div className="page-location-banner-wrapper mx-auto h-100">
          <div className="page-location-banner-content h-100 d-flex justify-content-center mx-auto">
            <div className="page-location-banner-item-heading">
              {props.heading}
            </div>

            <div className="page-location-banner-file-location">
              {props.location.split("/").map((e, i, arr) => (
                <Link
                  to={e == "Home" ? "/" : e.toLowerCase().replace(/\s+/g, "")}
                  onClick={(event) =>
                    i == arr.length - 1 && event.preventDefault()
                  }
                  key={i}
                >
                  {e.replace(/\s+/g, "")}

                  <span key={i} className="mx-2">
                    {i < arr.length - 1 ? "/" : ""}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLocationBanner;
