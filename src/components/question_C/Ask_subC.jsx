import { Component } from "react";
import {Textfit} from 'react-textfit';
import classes from "./question_C.module.sass";
class Ask extends Component {
  state = {};
  render() {
    return (
      <details className={`${classes.details} p-0 m-auto w-75`}>
        <summary className={`${classes.summary} mb-1`}>
          <Textfit mode='' min={14} max={20}>
            {this.props.question.q_head}
          </Textfit>
        </summary>
        <Textfit min={12}>
          <p className={`${classes.p} p-3`}>{this.props.question.q_tail}</p>
        </Textfit>
      </details>
    );
  }
}

export default Ask;
