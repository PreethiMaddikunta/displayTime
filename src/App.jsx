import { useState } from 'react'
import './App.css'

let time = new Date().toLocaleTimeString();

function App() {
  const [ctime,Setctime] = useState(time);

  const UpdateTime = () =>{
    let time = new Date().toLocaleTimeString();
    Setctime(time);
  }

  setInterval(UpdateTime,1000);
  return (
    <div className="App">
      <h1>{ctime}</h1>
    </div>
  )
}

export default App
