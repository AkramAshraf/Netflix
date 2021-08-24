import Btn from "../btn_C/btn_C_structure";
import SelectBox from "../selectBox_C/selectBox_C";
import Brand from '../brand_C/brand'
import classes from './Nav_C.module.sass'
const Nav = (props) => {
  return (
    <div
      className={classes.navigation}
    >
      <div className="container">
        <nav className="navbar">
          <Brand />
          <form className="d-flex col-8 col-md-6 justify-content-end">
            <SelectBox
              selectOptions={{
                langs: [
                  "English",
                  "العربية",
                  "French",
                  "German",
                  "Chinese",
                  "Korean",
                  "Malay",
                  "Nepali",
                  "Serbian",
                  "Sumerian",
                  "Ukrainian",
                  "Zuni	",
                ],
              }}
            />
            <Btn
              btn_data={{
                content: `Sign in`,
                icon: "",
                iconDisplacement: "false",
                bgColor: "red",
                bgFade: "false",
                btnNum: "0",
                col: "0",
              }}
            />
          </form>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
