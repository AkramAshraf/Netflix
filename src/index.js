// Packages
import ReactDOM from "react-dom";
import { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

// Components
import Progress from "./components/pageProgress_C/pageProgress";
import Nav from "./components/nav_bar/Nav_C";
import Face from "./components/Face_C/Face_C";
import Story from "./components/story_C/story_C";
import Questions from "./components/question_C/question_C";
import Membership from "./components/Membership_C/Membership_C";
import Footer from "./components/footer_C/Footer_C";
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

ReactDOM.render(
  <Fragment>
    <Progress />
    <Nav />
    <Face />
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
  </Fragment>,
  document.getElementById("root")
);
