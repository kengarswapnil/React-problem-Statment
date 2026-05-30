import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [isRuning, setIsrunning] = useState(false)

  useEffect(() => {
    let timer;
    if (isRuning) {
     timer =  setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    }
    return ()=> clearInterval(timer);
  },[isRuning])

  return (
    <>
      <div>
        <h2>Timer:{time}</h2>
        <button onClick={()=>setIsrunning(false)}>Stop</button>
        <button onClick={()=>setIsrunning(true)}>Start</button>
        <button onClick={()=>{
          setIsrunning(false)
          setTime(0)
        }}>Reset</button>
      </div>
    </>
  )
}

export default App
