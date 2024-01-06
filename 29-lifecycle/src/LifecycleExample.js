import React, { Component } from 'react';

class LifecycleExample extends Component {
  // 1. constructor
  constructor(props) {
    super(props);
    // 초기 상태 설정
    this.state = {
      count: 0,
    };
    // 생성자에서만 사용 가능한 초기화 작업에 유용
    console.log('1. constructor');
  }

  // 2. static getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    // props로 받아온 값을 state에 동기화하거나
    // 일부 조건에 따라 state를 변경할 때 사용
    console.log('2. getDerivedStateFromProps');
    return null; // 일반적으로 반환값은 사용되지 않음
  }

  // 4. componentDidMount
  componentDidMount() {
    // 컴포넌트가 마운트된 직후에 호출되는 메서드
    // 네트워크 요청, 초기 데이터 로딩 등의 작업에 적합
    console.log('4. componentDidMount');
  }

  // 5. shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    // 컴포넌트의 리렌더링 여부를 결정
    // 성능 최적화에 활용
    console.log('5. shouldComponentUpdate');
    return true; // true일 경우 렌더링 수행, false일 경우 렌더링 건너뜀
  }

  // 6. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // render 메서드 호출 직전에 호출되는 메서드
    // 주로 스크롤 위치나 이벤트 등을 저장하고 이후 componentDidUpdate에서 활용
    console.log('6. getSnapshotBeforeUpdate');
    return null; // 일반적으로 반환값은 사용되지 않음
  }

  // 7. componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 컴포넌트의 업데이트가 완료된 후 호출되는 메서드
    // 업데이트 이후의 작업 수행
    console.log('7. componentDidUpdate');
  }

  // 8. componentWillUnmount
  componentWillUnmount() {
    // 컴포넌트가 소멸되기 전에 호출되는 메서드
    // 리소스 해제나 정리 작업에 활용
    console.log('8. componentWillUnmount');
  }

  // 이벤트 핸들러: 버튼 클릭 시 count 상태를 증가시킴
  handleButtonClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // 3. render
  render() {
    // 컴포넌트의 UI를 생성하는 메서드
    // 렌더링 결과를 반환
    console.log('3. render');
    return (
      <div>
        <h1>React Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Increase Count</button>
      </div>
    );
  }
}

export default LifecycleExample;
