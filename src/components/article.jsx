import { Component } from 'react';
import { BsHash } from "react-icons/bs";
import classes from './article.module.sass'
class Article extends Component {
    state = {  }
    render() { 
        return (
          <>
            <article className="d-flex flex-column my-3">
              <h5 className={`${classes["article-head"]} ps-2`}>
                <span className='d-none d-sm-inline-block'>
                  <BsHash />
                </span>
                {this.props["article-head"]}
              </h5>
              <p className="ms-2">
                {this.props["article-body"]}
                <a
                  href="2"
                  className="text-decoration-none text-danger left-motion"
                >
                  {this.props["article-foot"]}
                </a>
                .
              </p>
            </article>
          </>
        );
    }
}
 
export default Article;