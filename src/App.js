import './App.css';
import UseCallbackDemo from './UseCallbackDemo';
import UseContextDemo from './UseContextDemo';
import UseMemoDemo from './UseMemoDemo';
import UseRefDemo from './UseRefDemo';
import UseRefDemo2 from './UseRefDemo/demo2';
// import HookDemo from './HookDemo';

function App() {
  return (
    <div className="App">
      {/* <HookDemo /> */}

      {/* <UseMemoDemo /> */}
      {/* <UseCallbackDemo></UseCallbackDemo> */}
      {/* <UseContextDemo></UseContextDemo> */}
      <UseRefDemo></UseRefDemo>
      <UseRefDemo2></UseRefDemo2>
    </div>
  );
}

export default App;
