import React, { useState } from "react";

function HandlerEx() {
  const texts = ['hello World', 'Goodbye World', 'Another Text', 'More Texts'];
  const [textIndex, setTextIndex] = useState(0);
  const [color, setColor] = useState('black');
  const [isHidden, setIsHidden] = useState(false);

  const change = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  }

  const changered = () => {
    setColor('red'); 
  }

  const changeblue = () => {
    setColor('blue');
  }

  const disable = () => {
    setIsHidden(true); 
  } 

  const see = () => {
    setIsHidden(false); 
  } 

  return (
    <div>
      {isHidden ? null : (
        <h1 style={{ color: color }}>{texts[textIndex]}</h1>
      )}
      <button onClick={change}>Change</button>
      <button onClick={changered}>빨간색</button>
      <button onClick={changeblue}>파란색</button>
      <button onClick={disable}>사라져라</button>
      <button onClick={see}>나타나라</button>
    </div>
  );
}

export default HandlerEx;
