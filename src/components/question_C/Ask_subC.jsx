import { Textfit } from "react-textfit";
import classes from "./question_C.module.sass";
const Ask = (props) => {
  return (
    <details className={`${classes.details} p-0 m-auto w-75`}>
      <summary className={`${classes.summary} mb-1`}>
        <Textfit>{props.question.q_head}</Textfit>
      </summary>
      <Textfit min={12}>
        <p className={`${classes.p} p-3`}>{props.question.q_tail}</p>
      </Textfit>
    </details>
  );
};

export default Ask;
