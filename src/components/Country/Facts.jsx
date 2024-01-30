import "../../css/Country/Facts.css";

const Element = (props) => {
  return (
    <>
      <li className="d-flex">
        <span>{props.props.facts[parseInt(props.index)].split("#")[0]}</span>
        <span>{props.props.facts[parseInt(props.index)].split("#")[1]}</span>
      </li>
    </>
  );
};

const Facts = (props) => {
  return (
    <>
      <div className="country-page-facts-wrapper d-flex justify-content-center">
        <ul className="d-grid list-unstyled d-flex">
          <section className="d-flex">
            <Element props={props} index="0" />

            <div className="country-page-facts-seperator mx-3"></div>
            <Element props={props} index="1" />
          </section>

          <div className="country-page-facts-seperator mx-3"></div>
          <Element props={props} index="2" />
        </ul>
      </div>
    </>
  );
};

export default Facts;
