import React, { Component } from "react";

class ScrollTop extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let $Y1 = window.pageYOffset,
          traffic = document.getElementById("traffic");
      $Y1 > 500
        ? (traffic.style.transform = "translateX(0px)")
        : (traffic.style.transform = "translateX(100px)");
    });
  }
  render() {
    return (
      <>
        <div
          className='text-center text-light fs-5 position-fixed'
            onClick={(_) => {
              window.scrollTo(0, 0);
            }}
            id="traffic"
            style={{
              // background: "linear-gradient(45deg, #ae1ade, red)",
              background: '#e50914',
              width: " 30px",
              height: "30px",
              lineHeight: "30px",
              fontFamily: "system-ui",
              right: "3%",
              bottom: "30px",
              cursor: "pointer",
              zIndex: '2323',
              transition: 'all .5s'
            }}
          >
            UP
          </div>
      </>
    );
  }
}

export default ScrollTop;
