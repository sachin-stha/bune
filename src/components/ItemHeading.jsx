import "../css/ItemHeading.css";

const ItemHeading = (props) => {
  return (
    <>
      <div className="item-heading">
        <div className="primary-heading">{props.primary}</div>
        <div className="secondary-heading">{props.secondary}</div>
        <div className="item-heading-section-title mt-3 mb-4"></div>
      </div>
    </>
  );
};

export default ItemHeading;
