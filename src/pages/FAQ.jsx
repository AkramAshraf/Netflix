import { Component } from 'react'
import Brand from '../components/brand';
class FAQ extends Component {
    state = {  }
    render() { 
        return (
          <>
            {/* Navbar Start */}
            <div className="position-absolute w-100 bg-light">
              <div className="container">
                <div className="navbar row">
                            <div className="left col">
                                <Brand></Brand>
                  </div>
                  <div className="right col">right</div>
                </div>
              </div>
            </div>
            {/* <div className="position-absolute w-100 bg-dark">
              <div className="container">
                <nav className="navbar" style={{ height: "50px" }}>
                  <div className="col d-none d-sm-block brandContainer d-flex align-items-center justify-content-evenly flex-fill">
                    <Brand />
                    <h4 className="text-light text-capitalize">
                      help center
                    </h4>
                  </div>

                  <div className="col d-sm-none">
                    <svg
                      class="n-svg"
                      focusable="true"
                      viewBox="225 0 552 1000"
                      height="32px"
                    >
                      <defs>
                        <radialGradient
                          id="54260309-7575-46f4-a806-31673acf60fe-a"
                          r="75%"
                          gradientTransform="matrix(.38 0 .5785 1 .02 0)"
                        >
                          <stop offset="60%" stop-opacity=".3"></stop>
                          <stop offset="90%" stop-opacity=".05"></stop>
                          <stop offset="100%" stop-opacity="0"></stop>
                        </radialGradient>
                      </defs>
                      <path
                        d="M225 0v1000c60-8 138-14 198-17V0H225"
                        fill="#b1060e"
                      ></path>
                      <path
                        d="M579 0v983c71 3 131 9 198 17V0H579"
                        fill="#b1060e"
                      ></path>
                      <path
                        d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
                        fill="url(#54260309-7575-46f4-a806-31673acf60fe-a)"
                      ></path>
                      <path
                        d="M225 0l349 983c76 3 136 9 203 17L423 0H225"
                        fill="#e50914"
                      ></path>
                    </svg>
                  </div>

                  <form
                    className="d-flex col justify-content-end"
                    style={{ height: "90%", lineHeight: "1" }}
                  >
                    <Btn
                      content="JOIN NETFLIX"
                      icon=""
                      iconDisplacement="false"
                      bgColor=""
                      bgFade="false"
                    />
                    <Btn
                      content="SIGN IN"
                      icon=""
                      iconDisplacement="false"
                      bgColor=""
                      bgFade="false"
                    />
                  </form>
                </nav>
                <h4 className="text-light text-capitalize d-sm-none">
                  help center
                </h4>
              </div>
            </div> */}
            {/* Navbar End */}
          </>
        );
    }
}
 
export default FAQ;