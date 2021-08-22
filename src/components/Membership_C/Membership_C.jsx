import { Component } from 'react'
import Btn from '../btn_C/btn_C_structure'
import { Textfit } from 'react-textfit'
class Membership extends Component {
    state = {  }
    render() {
      return (
        <Textfit className='text-center container mt-5' min={15}>
          <p className='m-0'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div
            class="form-floating d-flex justify-content-center flex-sm-column align-items-sm-center flex-lg-row"
            
          >
            <input
              type="email"
              style={{ width: "60%", padding: "10px", outline: "none" }}
              placeholder="Email Address"
            />
            
            <Btn
              btn_data={{
                content: `Sign in`,
                icon: "",
                iconDisplacement: "false",
                bgColor: "red",
                fontSize: "",
                bgFade: "false",
                btnNum: "0",
                col: "0",
              }}
            />
          </div>
        </Textfit>
      );
    }
}
 
export default Membership;