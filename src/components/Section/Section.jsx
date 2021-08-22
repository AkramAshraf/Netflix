import { Fragment } from "react";
const Section = (props) => {
  return (
    <Fragment>
      <div className="section p-5 text-light" style={{ background: "#000" }}>
        <div className="container-lg">{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Section;