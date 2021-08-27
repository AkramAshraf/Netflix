import btnStyle from "./_btn_C_style.module.sass";

let Btn = (props) => {
  let iconDisplacement = () => {
    let btn = document.querySelectorAll('button');
    let btn_icon = document.querySelectorAll("button i");
    for (let i = 0; i < btn.length; i++){
      if (props.iconDisplacement === "true") {
      btn_icon[i].classList.add(`${btnStyle.iconDisplacement}`);
    }
    if (props.bgFade === "true") {
      btn[i].classList.add(`${btnStyle.bgFade}`);
      }
      if (props.bg !== true) {
        btn[i].style.background = `${props.bgColor}`;
      }
    }
    
  };


  return (
    <button
      onMouseEnter={iconDisplacement}
      id="main_btn"
      className={`${btnStyle.main_btn} fw-bold`}
      type="submit"
      
    >
      {props.content}{" "}
      <i id="main_btn_icon" className={props.icon}></i>
    </button>
  );
};

export default Btn;
