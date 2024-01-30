import "../../css/Country/Reason.css";

const Element = (props) => {
  return (
    <>
      <div className="country-page-reasons-item">
        <div
          className="country-page-reasons-item-icon"
          style={{ backgroundColor: props.props.color[parseInt(props.index)] }}
        >
          <span>
            <i className={"fa " + props.props.icon[parseInt(props.index)]}></i>
          </span>
        </div>

        <div className="country-page-reasons-item-caption">
          {props.props.caption[parseInt(props.index)]}
        </div>

        <div className="country-page-reasons-item-explaination">
          {props.props.explaination[parseInt(props.index)]}
        </div>
      </div>
    </>
  );
};

const Reason = (props) => {
  return (
    <>
      <div className="country-page-reasons-section d-flex w-100">
        <section className="d-flex">
          <Element props={props} index="0" />
          <Element props={props} index="1" />
        </section>

        <Element props={props} index="2" />
      </div>

      <div className="country-page-reasons-section d-flex w-100 justify-content-center">
        <Element props={props} index="3" />
        <Element props={props} index="4" />
      </div>
    </>
  );
};

export default Reason;
