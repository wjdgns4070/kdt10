import React, { Component } from "react";
import PropTypes from "prop-types"
import book from './images/book.jpg'

class ClassComponent extends Component {
    render (){
        const {title} = this.props;
        const {author} = this.props;
        const {price} = this.props;
        const {type} = this.props;

        return(
        <div>
            <p><b>{title}</b></p>
            <img src={book} alt="" />
            <p><b>{author}</b></p>
            <p><b>{price}</b></p>
            <p><b>{type}</b></p>

        </div>
        )
    }
}

ClassComponent.defaultProps = {
    title: "이번주 베스트셀러",
    author: "작가 : 홍길동",
    price : "가격 : 15000원",
    type : "책"
  };

  ClassComponent.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.string,
    type: PropTypes.string,

  };

export default ClassComponent