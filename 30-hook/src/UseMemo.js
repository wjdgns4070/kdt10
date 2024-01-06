import { useState, useMemo } from 'react';

function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // calc 실행 됐을 때 return 하는 값이 count와 관련
  // 의존 배열에 count를 넣어주면, count의 값이 바뀔 때만 함수를 실행
  // input 값이 바뀔 때는 실행 x (컴포넌트는 리렌더링 O )
  const calc = useMemo(() => {
    console.log('열심히 계산중..');
    for (let i = 0; i < 1000000; i++) {}

    return count ** 2;
  }, [count]);

  return (
    <>
      <h1>UseMemo Ex</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Plus</button>
      {/* input */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>count: {count}</p>
      <p>calc: {calc}</p>
    </>
  );
}

export default UseMemoEx;
