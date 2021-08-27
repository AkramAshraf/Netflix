import { Fragment } from "react";
import {NavLink} from 'react-router-dom'
import classes from "./_Footer_C.module.sass";
import SelectBox from "../selectBox_C/selectBox_C";
const Footer = (props) => {
  return (
    <Fragment>
      <footer className={`${classes.footer} border-top border-5 border-dark`}>
        <div className="container">
          <nav className="row list-unstyled g-5">
            <li className={`${classes.exect} mb-4`}>
              <a href="$" className={`text-decoration-none`}>
                Questions? Contact us.
              </a>
            </li>
            {Object.keys(props.footerLinks).map((key, index) => {
              return (
                <li
                  key={`unique-${index}`}
                  className={`${classes.xs} d-flex col-sm-6 col-md-4 col-lg-3 my-1 p-0`}
                >
                  <i
                    className={`${
                      classes[`icon-${index}`]
                    } d-inline-block col-2`}
                  >
                    {props.footerLinks[key]}
                  </i>

                  <NavLink to={key} className={`text-decoration-none`}>
                    {key}
                  </NavLink>
                </li>
              );
            })}
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
};

export default Footer;