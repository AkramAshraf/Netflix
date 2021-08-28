import Btn from "../btn_C/btn_C_structure";
import { Textfit } from "react-textfit";
import classes from "./_Membership_C.module.sass";
const Membership = (props) => {
  return (
    <Textfit className="text-center container mt-5" min={15}>
      <p className="my-2 p-size">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="form-floating d-flex justify-content-center flex-sm-column align-items-sm-center flex-lg-row">
        <input
          className={classes.emailField}
          type="email"
          placeholder="Example@gmail.com"
        />

        <Btn
          content='Get Started'
          icon= "fas fa-chevron-right"
          iconDisplacement= "true"
          bgColor= ""
          bgFade= "false"
        />
      </div>
    </Textfit>
  );
};

export default Membership;
