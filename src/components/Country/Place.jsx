import "../../css/Country/Place.css";

const PlayCard = (props) => {
  return (
    <>
      <div className="country-page-city-item">
        <div className="country-page-city-item-img">
          <span
            style={{
              backgroundImage:
                "url(" + props.props.imgURL[parseInt(props.index)] + ")",
            }}
          ></span>
        </div>

        <div className="country-page-city-item-caption">
          {props.props.name[parseInt(props.index)]}
        </div>

        <div className="country-page-city-item-explaination">
          {props.props.explaination[parseInt(props.index)]}
        </div>
      </div>
    </>
  );
};

const Place = (props) => {
  return (
    <>
      <div className="country-page-city-section-wrapper d-flex">
        <div className="country-page-city-section d-flex">
          <section className="d-flex">
            <PlayCard index="0" props={props} />

            <PlayCard index="1" props={props} />
          </section>

          <PlayCard index="2" props={props} />
        </div>

        <div className="country-page-city-section d-flex mx-auto">
          <PlayCard index="3" props={props} />

          <PlayCard index="4" props={props} />
        </div>
      </div>
    </>
  );
};

export default Place;
