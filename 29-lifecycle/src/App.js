import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import LifecycleExample from './LifecycleExample';
import AxiosEx from './AxiosEx';
function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 라이프사이클 */}
      <LifeCycleClass />
      <hr />

      {/* 함수형 컴포넌트 라이프사이클 */}
      <LifeCycleFunc />
<hr />
      <LifecycleExample/>
      <hr />
      <AxiosEx/>
    </div>
  );
}

export default App;
