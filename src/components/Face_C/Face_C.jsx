import Membership from "../Membership_C/Membership_C.jsx";
const Face = (props) => {
  return (
    <div
      className="face text-light"
      style={{
        background:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/2c237eeb-61e6-46b0-8097-768a01ade2f4/EG-en-20210719-popsignuptwoweeks-perspective_alpha_website_medium.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        boxShadow: "inset 0 0 0px 1400px #0000009e",
      }}
    >
      <div
        className="face_content"
        style={{
          position: "absolute",
          width: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <hgroup>
            <h1 style={{ fontSize: "calc(1.0375rem + 1.5vw)" }}>
              Unlimited movies, TV shows, and more.
            </h1>
            <h4 style={{ fontSize: "calc(1.0275rem + .3vw)" }}>
              Watch anywhere. Cancel anytime.
            </h4>
          </hgroup>

          <Membership />
        </div>
      </div>
    </div>
  );
};

export default Face;
