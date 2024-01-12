import { useSelector, useDispatch } from 'react-redux';

function App1() {
  const number = useSelector((state) => state.number);

  return (
    <div className="App">
      <h1>React State Ex</h1>
      <h2>number: {number}</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  const number = useSelector((state) => state.number);

  return (
    <div className="Box">
      <h2>Box1 : {number}</h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  const number = useSelector((state) => state.number);

  return (
    <div className="Box">
      <h2>Box2 : {number}</h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  const number = useSelector((state) => state.number);

  return (
    <div className="Box">
      <h2>Box3 : {number}</h2>
      <Box4 />
    </div>
  );
};

const Box4 = () => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4 : {number}</h2>
      <button onClick={() => dispatch({ type: 'plus' })}>plus</button>
      <button onClick={() => dispatch({ type: 'minus' })}>minus</button>
    </div>
  );
};

export default App1;
