import React, { Component } from "react";

class x_Progress extends Component {
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
            style={{
              background: "#e50914",
              // "linear-gradient(to right, rgb(247, 220, 27), #fd4b4b, rgb(145, 0, 255))",
            }}
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

export default x_Progress;
