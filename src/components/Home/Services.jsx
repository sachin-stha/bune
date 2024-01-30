import ItemHeading from "../ItemHeading";

import "../../css/Home/Service.css";

const Services = () => {
  const items = {
    name: ["Get Consultation", "Visa Application", "Pre-Departure Guide"],
    icons: ["fa fa-handshake-o", "fa fa-star-half-o", "fa fa-lightbulb-o"],
  };

  return (
    <>
      <div className="services w-100 mt-5 pt-3 position-relative">
        <div className="services-wrapper m-auto">
          <ItemHeading
            primary="What we Provide?"
            secondary="Make your study abroad journey hassle-free with our range of
              services."
          />

          <div className="services-items">
            <ul className="list-unstyled d-flex">
              <div className="services-first-row d-flex">
                <li className="bg-white d-flex align-items-center justify-content-center">
                  <div className="services-item-icon d-flex align-items-center justify-content-center">
                    <i
                      className={items.icons[0] + " text-white"}
                      aria-hidden="false"
                    ></i>
                  </div>

                  <p>{items.name[0]}</p>
                </li>
                <li className="bg-white d-flex align-items-center justify-content-center">
                  <div className="services-item-icon d-flex align-items-center justify-content-center">
                    <i
                      className={items.icons[1] + " text-white"}
                      aria-hidden="false"
                    ></i>
                  </div>

                  <p>{items.name[1]}</p>
                </li>
              </div>

              <li className="bg-white d-flex align-items-center justify-content-center">
                <div className="services-item-icon d-flex align-items-center justify-content-center">
                  <i
                    className={items.icons[2] + " text-white"}
                    aria-hidden="false"
                  ></i>
                </div>

                <p>{items.name[2]}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
