import { useSelector } from "react-redux";
import Box1 from "./components/Box1";

function App() {
    const number = useSelector((state) => state.number)
    return (<>
    <h1>React Redux Ex 2</h1>
    <h2>{number}</h2>
    <Box1/>
    </>)
}

export default App;