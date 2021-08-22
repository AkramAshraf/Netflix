import { Component, Fragment } from "react"
class Section extends Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <div className="section p-5 text-light" style={{background: '#000'}}>
                    <div className="container-lg">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Section;