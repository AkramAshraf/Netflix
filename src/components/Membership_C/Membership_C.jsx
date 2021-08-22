import Btn from "../btn_C/btn_C_structure";
import { Textfit } from "react-textfit";
import classes from "./Membership_C.module.sass";
const Membership = (props) => {
  return (
    <Textfit className="text-center container mt-5" min={15}>
      <p className="my-2" style={{ fontSize: "calc(0.7rem + 1vw)" }}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="form-floating d-flex justify-content-center flex-sm-column align-items-sm-center flex-lg-row">
        <input
          className={classes.emailField}
          type="email"
          placeholder="Example@gmail.com"
        />

        <Btn
          btn_data={{
            content: `Sign in`,
            icon: "",
            iconDisplacement: "false",
            bgColor: "red",
            fontSize: "",
            bgFade: "false",
            btnNum: "0",
            col: "0",
          }}
        />
      </div>
    </Textfit>
  );
};

export default Membership;
