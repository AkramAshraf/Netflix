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
      
    }
    
  };


  return (
    <button
      onMouseEnter={iconDisplacement}
      id="main_btn"
      className={`${btnStyle.main_btn} fw-bold ms-2 p-2`}
      type="submit"
      style={props.style}
    >
      {props.content} <i id="main_btn_icon" className={props.icon}></i>
    </button>
  );
};

export default Btn;
