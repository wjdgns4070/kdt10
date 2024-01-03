import SyntheticEvent from './SyntheticEvent'
import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './HandlerEx'

function App() {
  return (
    <div className="App">
      <SyntheticEvent/>
      <hr />
      <ClassBind/>
      <hr />
      <Counter/>
      <hr />
      <HandlerEx/>
    </div>

  );
}

export default App;
