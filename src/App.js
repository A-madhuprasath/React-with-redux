import './App.css';
import {useSelector} from "react-redux";

function App() {
  const counter = useSelector((state)=>state.counter)
  return (
    <div className="App">
      Counter: {counter}
    </div>
  );
}

export default App;
