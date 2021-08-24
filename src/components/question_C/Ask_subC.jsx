import { Component } from "react";
import classes from "./question_C.module.sass";
class Ask extends Component {


  render() {
   return (
    <details className={`${classes.details} p-0 mx-auto my-2 w-75`}>
      <summary className={`${classes.summary} mb-1 `}>
        {this.props.question.q_head}
      </summary>

      <p
        className={`${classes.p} p-3`}
        style={{
          fontSize: "clamp(0.7rem, -0.875rem + 5vw, 2rem)",
        }}
      >
        {this.props.question.q_tail}
      </p>
    </details>
  );
}
 
};

export default Ask;
