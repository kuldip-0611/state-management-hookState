import { Button } from 'reactstrap';
import './App.css';
import {counterState} from './hookState';
import { useHookstate } from '@hookstate/core';


function App() {
 
    const counter = useHookstate(counterState);
  
  return (
    <div className="App">
          <div className='container bg-dark text-light p-3 w-25'>
            {counter.get()}
          </div>
          <div className='buttons '>
          <Button className='m-3' onClick={()=>counter.set(p=>p+1)}>Increment</Button>
          <Button className='ms-3' onClick={()=>counter.set(p=>p-1)}>Decrement</Button>
          <Button className='ms-3' onClick={()=>counter.set(0)}>Reset</Button>
          </div>
    </div>
  );
}

export default App;
