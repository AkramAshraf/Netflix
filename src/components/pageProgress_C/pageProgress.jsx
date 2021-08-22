import React, { Component } from "react";

class Progress extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let $Y1 = window.pageYOffset,
        $Y2 = document.documentElement["scrollHeight"],
        $C = document.documentElement.clientHeight,
        gohead = document.getElementById("gohead");
      gohead.style.width = `${($Y1 / ($Y2 - $C)) * 100}vw`;
    });
  }

  render() {
    return (
      <>
        <div
          className="progress"
          style={{ height: "3px", position: "fixed", zIndex: 23, top: 0 }}
        >
          <div
            id="gohead"
            style={{ background: "red" }}
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </>
    );
  }
}

export default Progress;
