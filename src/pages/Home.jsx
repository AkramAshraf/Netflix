// Packages

import { Component, Fragment } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

// Components
import Progress from "../components/pageProgress_C/pageProgress";
import Btn from "../components/btn_C/btn_C_structure";
import SelectBox from "../components/selectBox_C/selectBox_C";
import Brand from "../components/brand";
import Story from "../components/story_C/story_C";
import Questions from "../components/question_C/question_C";
import Membership from "../components/Membership_C/Membership_C";
import Footer from "../components/footer_C/Footer_C";
// Icon Components
import {
  FaQuoteLeft,
  FaRegHandshake,
  FaBalanceScaleRight,
} from "react-icons/fa";
import { BsLock, BsListCheck } from "react-icons/bs";
import {
  IoSpeedometerOutline,
  IoInformationCircleOutline,
  IoBusinessOutline,
  IoHelp,
} from "react-icons/io5";
import { RiContactsLine, RiComputerLine, RiNetflixLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { SiVlcmediaplayer } from "react-icons/si";
import { BiCookie } from "react-icons/bi";

// bootstrap customization
import "../bootstrap-customize.scss";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Progress />
        {/* Navbar Start */}
        <div className="position-absolute w-100">
          <div className="container">
            <nav className="navbar">
              <Brand />
              <form className="d-flex col-8 col-md-6 justify-content-end">
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
                <Btn
                  content="Sign in"
                  icon="fas fa-adjust"
                  iconDisplacement="true"
                  bgColor="red"
                  bgFade="true"
                />
              </form>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
        {/* Face Start */}
        <div
          className="text-light"
          style={{
            background:
              "url(https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/2c237eeb-61e6-46b0-8097-768a01ade2f4/EG-en-20210719-popsignuptwoweeks-perspective_alpha_website_medium.jpg)",
            backgroundSize: "cover",
            height: "100vh",
            boxShadow: "inset 0 0 0px 1400px #0000009e",
          }}
        >
          <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
            <div className="container">
              <hgroup>
                <h1 className="h1">Unlimited movies, TV shows, and more.</h1>
                <h4 className="h4">Watch anywhere. Cancel anytime.</h4>
              </hgroup>
              <Membership />
            </div>
          </div>
        </div>
        {/* Face End */}

        <Story
          story_data={{
            "story-article-H": "Enjoy on your TV.",
            "story-article-P":
              "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,Blu-ray players, and more.",
            "story-presentation-img":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
            "story-presentation-video":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
            "story-video-style": {
              top: "49%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
            },
            width: "69%",
          }}
        />
        <Story
          story_data={{
            "story-article-H": "Download your shows to watch offline.",
            "story-article-P":
              "Save your favorites easily and always have something to watch.",
            "story-presentation-img":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
            "story-presentation-video": "",
          }}
        />
        <Story
          story_data={{
            "story-article-H": "Watch everywhere.",
            "story-article-P":
              "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
            "story-presentation-img":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
            "story-presentation-video":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",

            "story-video-style": {
              top: "0",
              left: "0",
              transform: "translate(35.5%, 19%)",
              position: "absolute",
            },
            width: "57%",
          }}
        />
        <Story
          story_data={{
            "story-article-H": "Create profiles for kids.",
            "story-article-P":
              "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
            "story-presentation-img":
              "https://occ-0-778-360.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd",
            "story-presentation-video": "",
          }}
        />
        <Questions>
          <Membership />
        </Questions>
        <Footer
          footerLinks={{
            FAQ: <FaQuoteLeft />,
            "Help Center": <IoHelp />,
            Account: <VscAccount />,
            "Media Center": <SiVlcmediaplayer />,
            "Investor Relations": <FaRegHandshake />,
            Jobs: <IoBusinessOutline />,
            "Ways to watch": <RiComputerLine />,
            "Terms of Use": <BsListCheck />,
            Privacy: <BsLock />,
            "Cookie Perferences": <BiCookie />,
            "Corporate Information": <IoInformationCircleOutline />,
            "Contact Us": <RiContactsLine />,
            "Speed Test": <IoSpeedometerOutline />,
            "Legal Notices": <FaBalanceScaleRight />,
            "Only on Netflix": <RiNetflixLine />,
          }}
        />
      </Fragment>
    );
  }
}

export default Home;
