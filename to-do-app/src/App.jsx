import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [date, setDate] = useState()
  const [task, setTask] = useState();
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState('All')

  const filterdData = data.filter((t, i) => {
    if (toggle === 'completed') return t.completed === true;
    if (toggle === 'Incompleted') return t.completed === false;
    return true;

  })

  function mark(id){
    const updated = data.map((t)=>
    
    t.id === id ? {...t,completed:!t.completed}:t
    )
    setData(updated)
  }

  function Todo(e) {
    e.preventDefault();
    console.log(task, date)
    const newTask = {
      id: Date.now(),
      task,
      date,
      completed: false
    }
    console.log(newTask)
    setData([...data, newTask])
  }


  return (


    <>
      <h1 className='bg-blue-300 text-center p-2 text-2xl text-white' >TO_DO_APP</h1>
      <div className='ms-10'>

        <div className='mt-3 ' >
          <button onClick={()=>setToggle('All')} className='bg-orange-300 px-2 rounded m-1'>All</button>
          <button onClick={()=>setToggle('completed')} className='bg-green-300 px-2 rounded m-1'>Completed</button>
          <button onClick={()=>setToggle('Incompleted')} className='bg-red-400 px-2 rounded m-1'>InCompleted</button>
        </div>

        <form class="flex flex-row mt-3  d-flex gap-2" onSubmit={Todo}>
          <div class="basis-128"><input type="text" className='bg-blue-200 border' placeholder='Enter task' onChange={(e) => setTask(e.target.value)} /></div>
          <div class="basis-128"><input type="date" className='bg-blue-300' placeholder='Enter Date' onChange={(e) => setDate(e.target.value)} /></div>
          <div class="basis-64"><button className='bg-blue-400 rounded text-white px-3'>ADD</button></div>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {filterdData.map((t) => (
                <tr className='gap-2'>
                  <td>{t.task}</td>
                  <td>{t.date}</td>
                  <td><button  onClick={() => mark(t.id)}
                    className={t.completed ? 'bg-green-400 px-2 rounded' : 'bg-gray-300 px-2 rounded'}>   {t.completed ? 'Done' : 'Pending'}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
