import React, { useState } from 'react';

const SayFunction = () => {
    const [message, setMessage] = useState("");

    const onClickEnter = () => {
        setMessage('안녕하세요~');
    }

    const onClickLeave = () => {
        setMessage('안녕히 가세요~');
    }

    return ( 
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
}

export default SayFunction;


// {
//     // 주의 사항 괄호 없음!
//     // html: onclick = "onclickEnter()" -> 문자열 형식으로 호출문 등록 
//     // JS : addEventListener(click,conclickEnter) -> 괄호를 없애 함수를 바로 실행하지 않고, 클릭이 발생했을 때 함수를 호출 되도록
//     // React: onClick={onclickEnter} -> JS 동일
// }