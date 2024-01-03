import {useState} from 'react'

const CounterFunction = () => {
    const [number, setNumber] = useState(0);
    const onclickEnter = () => {
        setNumber(number + 1);
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onclickEnter}>plus1</button>
        </div>
    )
};
export default CounterFunction