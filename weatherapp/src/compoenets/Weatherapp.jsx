import React, { useEffect, useState } from 'react'

const Weatherapp = () => {
  const [lat,setLat] = useState();
   const [lon,setLon] = useState();
 const [api,setApi] = useState();

 async function fetchApi (city){
    try{
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      const data = await res.json();
      setApi(data.current_weather);
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }

 

  // useEffect(()=>{
  //   fetchApi();
  // },[])

  return (
    <>
      <div className='border Custom'>
        <div> 
          <input type="text" onChange={(e)=>setLat(e.target.value)} />
             <input type="text" onChange={(e)=>setLon(e.target.value)} />
          <button onClick={fetchApi} className='btn btn-primary'>Serach</button>
        </div>
      {api && (
        <div>
         <p>Temp:{api.temperature}</p>
        <p>wind Speed :{api.windspeed}</p>
        </div>
      )}
       
      </div>
    </>
  )
}

export default Weatherapp
