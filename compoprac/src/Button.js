import React, { Component } from "react";
import PropTypes from "prop-types"; // 리액트에서 제공하는 기능
// prop-types 라이브러리를 PropTypes 이름으로 임포트

// class ClassComponent extends React.Component {
class Button extends Component {
  // 클래스형 컴포넌트는 render 함수가 필수
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <p>
          새로운 컴포넌트의 이름은 <b>{text}</b>
        </p>
<button></button>
      </div>
    );
  }
}

Button.defaultProps = {
  name: "coding",
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
