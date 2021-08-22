import { Component, Fragment } from "react";
class SelectBox extends Component {
  render() {
    return (
      <Fragment>
        <select
          className='fa'
          name="selectLang"
          id="lang"
          style={{
            flex: "0 1 35%",
            maxWidth: "130px",
            minWidth: "fit-content",
            marginRight: "3%",
            padding: ".2rem",
            appearance: "none",
            outline: "none",
            textAlignLast: "center",
          }}
        >
          {this.props.selectOptions.langs.map((language) => (
            <option
              key={language}
              value={language}
            >
              &#xf0ac;&nbsp; {language} &nbsp;&#xf0d7;
            </option>
          ))}
        </select>
      </Fragment>
    );
  }
}

export default SelectBox;
