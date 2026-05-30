import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [file, setFile] = useState(0)
  function handleChnage(e) {
    setFile(e.target.files[0])
  }

  function clear() {
    setFile(null)
  }
  return (
    <>
      <div>
        <input type="file" onChange={handleChnage} />
        {file && (
          <div style={{ marginTop: '20px' }}>
            <h3>Preview:</h3>
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded preview"
              style={{ maxWidth: '300px', maxHeight: '300px', borderRadius: '8px' }}
            />
          </div>
        )}
        <button className='btn btn-light' onClick={clear}>ClearAll</button>
      </div>
    </>
  )
}

export default App
