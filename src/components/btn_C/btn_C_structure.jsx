import { useEffect } from "react";
import btnStyle from "./_btn_C_style.module.sass";

let Btn = (props) => {
  let iconDisplacement = () => {
    let btn = document.querySelectorAll("button")[props.btn_data.btnNum];
    let btn_icon = document.querySelectorAll("button i")[props.btn_data.btnNum];
    if (props.btn_data.iconDisplacement === "true") {
      btn_icon.classList.add(`${btnStyle.iconDisplacement}`);
    }
    if (props.btn_data.bgFade === "true") {
      btn.classList.add(`${btnStyle.bgFade}`);
    }
  };

  useEffect(() => {
    let btn = document.querySelectorAll("button")[props.btn_data.btnNum];
    (function handleFontSize() {
      // btn.style.fontSize = `${props.btn_data.fontSize}`;
      btn.style.background = `${props.btn_data.bgColor}`;
    })();
  });

  return (
    <button
      onMouseEnter={iconDisplacement}
      id="main_btn"
      className={`${btnStyle.main_btn} ${props.btn_data.col} btn fw-bold`}
      type="submit"
      
    >
      {props.btn_data.content}{" "}
      <i id="main_btn_icon" className={props.btn_data.icon}></i>
    </button>
  );
};

export default Btn;
