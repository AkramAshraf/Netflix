/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import classes from "./history.module.sass";
import { BsBoxArrowRight, BsBoxArrowLeft } from "react-icons/bs";

class History extends Component {
  state = {};
  render() {
    return (
      <div
        id="history"
        className="position-fixed w-100 translate-middle-y top-50 d-flex justify-content-between"
        style={{ zIndex: "-3" }}
      >
        <a
          href="#"
          onClick={() => window.history.back()}
          className={`${classes.btnhover} text-secondary fs-2 p-0 ms-2`}
        >
          <BsBoxArrowLeft />
        </a>
        <a
          href="#"
          onClick={() => window.history.forward()}
          className={`${classes.btnhover} text-secondary fs-2 p-0 me-2`}
        >
          <BsBoxArrowRight />
        </a>
      </div>
    );
  }
}

export default History;
