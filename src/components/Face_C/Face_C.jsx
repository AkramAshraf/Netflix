import Membership from "../Membership_C/Membership_C.jsx";
import classes from './Face_C.module.sass'
const Face = (props) => {
  return (
    <div className={`${classes.face} text-light`} >
      <div className={classes.face_content} >
        <div className="container">
          <hgroup>
            <h1 className='h1'>
              Unlimited movies, TV shows, and more.
            </h1>
            <h4 className='h4'>
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
