import "../../css/Country/ContentTable.css";

const ContentTable = (props) => {
  return (
    <>
      <table className="table content-table" style={{ width: "fit-content" }}>
        <thead>
          <tr>
            {props.listState && <th scope="col">S.n.</th>}
            {props.heading.map((e, i) => (
              <th
                className="ps-3"
                key={i}
                style={{ paddingRight: i == 0 ? "20px" : "10px" }}
              >
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.content[Object.keys(props.content)[0]].map((e, i) => (
            <tr key={i}>
              {props.listState && <td scope="row">{i + 1 + "."}</td>}
              {Object.keys(props.content).map((elem, index) => (
                <td
                  className="ps-4"
                  key={index}
                  style={{ paddingRight: i == 0 ? "20px" : "10px" }}
                >
                  {props.content[elem][i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContentTable;
