import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './components/product'
import CartContext from './context/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContext>
    <Product/>
    </CartContext>
  )
}

export default App
