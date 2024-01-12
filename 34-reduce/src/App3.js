import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from './actions/action'; // 액션을 import

function App1() {
  const isValuable = useSelector((state) => state.isValuable);

  return (
    <div className="App">
      <h1>React State Ex</h1>
      <h2>isValuable: {isValuable ? 'true' : 'false'}</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  const isValuable = useSelector((state) => state.isValuable);

  return (
    <div className="Box">
      <h2>Box1 : {isValuable ? 'true' : 'false'}</h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  const isValuable = useSelector((state) => state.isValuable);

  return (
    <div className="Box">
      <h2>Box2 : {isValuable ? 'true' : 'false'}</h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  const isValuable = useSelector((state) => state.isValuable);

  return (
    <div className="Box">
      <h2>Box3 : {isValuable ? 'true' : 'false'}</h2>
      <Box4 />
    </div>
  );
};

const Box4 = () => {
  const isValuable = useSelector((state) => state.isValuable);
  const dispatch = useDispatch();
  
  return (
    <div className="Box">
      <h2>Box4 : {isValuable ? 'true' : 'false'}</h2>
      <button onClick={() => dispatch(setValue(true))}>True로 설정</button>
    </div>
  );
};

export default App1;
