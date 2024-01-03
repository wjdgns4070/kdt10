// import {useState} from 'react'

function SyntheticEvent() {

    function SyntheticEvent(e) {
        console.log('synthtic Event!')
        console.log(e)
    }

    function printInputValue(e) {
        console.log(e.target.value)
    }

    // 콘솔애 기록되는 e객체는 SyntheticEvent (합성 이벤트)
    //  :리액트가 DOM이 아닌 VirtualDOM을 사용하는 것처럼 웹브라우저의 nativeEvent가아니라 nativeEvent를 감싼 SyntheticEvent 사용

    // onClick이나 conChange와 같은 이벤트들은 브라우저 기본 이벤트가 아니라 리액트의 고유한 이벤트 객체 (SyntheticEvent)
    // 이벤트가 끝나면 초기화되어 정보 참조 불가

    return <div>
        <button onClick={SyntheticEvent}>SyntheticEven 콘솔에 찍기t</button>
        <input type="text" onChange={printInputValue} />
    </div>
}

export default SyntheticEvent