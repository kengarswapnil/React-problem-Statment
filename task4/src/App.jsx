import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  function Login(e){
    e.preventDefault()
    console.log(email,password)
  }

  return (
    <>
    <form  style={{border:"2px solid white",margin:"20px",padding:"10px" ,width:"300px" , margin:"auto" }}>
      <input type="text" placeholder='Enter Username' onChange={(e)=>setEmail(e.target.value)} required style={{width:"90%"}}/>
      <br />
      <input type="text" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} required style={{width:"90%"}}/>
      <br />
      <button style={{width:"100%"}} onClick={Login}>Login</button>
    </form>
    </>
  )
}

export default App
