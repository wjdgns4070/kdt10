import { useSelector, useDispatch } from "react-redux";

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
export default Box4;