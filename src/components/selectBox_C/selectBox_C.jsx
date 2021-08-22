import { Fragment } from "react";
const SelectBox=(props)=>{
    return (
      <Fragment>
        <select
          className="fa"
          name="selectLang"
          id="lang"
          style={{
            flex: "0 1 35%",
            maxWidth: "130px",
            minWidth: "fit-content",
            marginRight: "3%",
            minHeight: "calc(1.3rem + 2.2vh)",
            padding: ".2rem",
            appearance: "none",
            outline: "none",
            textAlignLast: "center",
            fontSize:
              "clamp(calc(0.6em + 1vmin), calc(0.5em + 1vmin), calc(1em + 1vmin))",
          }}
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
