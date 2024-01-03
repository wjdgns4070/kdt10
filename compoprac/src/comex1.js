import {useState} from 'react'

const Comex1 = () => {
   
    const [number, setNumber] = useState(1);
    const onclickEnter = () => {
        setNumber(number + 2);
    }

    const onclickminEnter = () => {
        setNumber(number-1)
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onclickEnter}>plus2</button>
            <button onClick={onclickminEnter}>minus1</button>
        </div>
        
    )
}

export default Comex1