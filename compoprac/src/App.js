import ClassComponent from './ClassComponent';
import Comex1 from './comex1';  // 첫 문자 대문자로 수정
import './App.css';

function App() {
  return (
    <div className='App'>
      <ClassComponent />
      <hr />
      <Comex1 />  {/* 수정된 부분 */}
    </div>
  );
}

export default App;
