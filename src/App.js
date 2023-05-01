import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function App() {
  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch()
  const increment=()=>{
    dispatch({type:"INC"})
  }
  const decrement=()=>{
    dispatch({type:"DEC"})
  }
  const add=()=>{
    dispatch({type:"ADD",payload:10})
  }
  return (
    <div className="App">
      <h1>counter: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={add}>Add 10</button>
    </div>
    
  );
}

export default App;
