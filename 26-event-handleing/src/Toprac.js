import React, { useState } from "react";

const Toprac = () => {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [selectedBgColor, setSelectedBgColor] = useState("");
  const [selectedTextColor, setSelectedTextColor] = useState("");
  const [inputText, setInputText] = useState("");

  const handleChangeFruit = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleChangeBgColor = (e) => {
    setSelectedBgColor(e.target.value);
  };

  const handleChangeTextColor = (e) => {
    setSelectedTextColor(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <label>과일:</label>
      <select onChange={handleChangeFruit}>
        <option value="peach">peach</option>
        <option value="apple">apple</option>
        <option value="melon">melon</option>
        <option value="banana">banana</option>
      </select>

      <label>배경색:</label>
      <select onChange={handleChangeBgColor}>
        <option value="pink">분홍색</option>
        <option value="red">빨간색</option>
        <option value="green">초록색</option>
        <option value="yellow">노란색</option>
      </select>

      <label>글자색:</label>
      <select onChange={handleChangeTextColor}>
        <option value="black">검은색</option>
        <option value="white">흰색</option>
        <option value="blue">파란색</option>
        <option value="orange">주황색</option>
      </select>

      <br />
      <label>내용:</label> <input type="text" value={inputText} onChange={handleInputChange} />
     


      <div style={{ width: 200, height: 200, marginLeft:450}}>
      <img src={`/${selectedFruit}.jpg`} alt="" />
      </div>

      <p style={{ color: selectedTextColor, backgroundColor: selectedBgColor, }}>
        {inputText}
      </p>
     
    </div>
  );
};

export default Toprac;
