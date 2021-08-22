import { Component, Fragment } from "react";
import classes from "./Footer_C.module.sass";
import SelectBox from "../selectBox_C/selectBox_C";
class Footer extends Component {

  render() {
    return (
      <Fragment>
        <footer
          className=" border-top border-5 border-dark"
          style={{ background: "#000", padding: "3rem 3rem 0.1rem 3rem" }}
        >
          <div className="container">
            <nav className="row list-unstyled">
              <li className={`${classes.exect} mb-4 p-0`}>
                
                <a href="$" className={`text-decoration-none`}>
                  Questions? Contact us.
                </a>
              </li>
              {Object.keys(this.props.footerLinks).map((key,index) => {
                return (
                  <li className={`${classes.xs} d-flex col-sm-4 col-lg-3 my-1 p-0`}>
                    <i class={`${classes[`icon-${index}`]} d-inline-block col-2`}>
                      {this.props.footerLinks[key]}
                    </i>

                    <a
                      href="#s"
                      className={`text-decoration-none`}
                    >
                      {key}
                    </a>
                  </li>
                );
              })}

              {/* {Object.keys(this.props.footerLinks.links).map((e) =>
                console.log(this.props.footerLinks.links[e])
              )} */}
              <li className="mt-5">
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
              </li>
            </nav>
            <p className="text-secondary my-4">Netflix Egypt</p>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
