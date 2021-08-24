import { Fragment } from "react"
import classes from './selectBox_C.module.sass'
const SelectBox=(props)=>{
    return (
      <Fragment>
        <select
          className={`fa ${classes.selectBox} selectBox-size`}
          name="selectLang"
          id="lang"
        >
          {props.selectOptions.langs.map((language) => (
            <option key={language} value={language}>
              &#xf0ac;&nbsp; {language} &nbsp;&#xf0d7;
            </option>
          ))}
        </select>
      </Fragment>
    );
  }

export default SelectBox;
