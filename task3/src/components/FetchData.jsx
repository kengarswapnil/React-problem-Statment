import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const FetchData = () => {
  const [joke,setJoke] = useState(null)
 async function fetchApi (){
  try{
    const res  = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    console.log(data)
    setJoke(data)

  }catch(err){
    console.log(err)
  }
 } 


 useEffect(()=>{
  fetchApi();
 },[])

  return (
    <div>
      <p>Joke: {joke ? joke.setup + " - " + joke.punchline : "Loading..."}</p>
      <button onClick={fetchApi}>Get Joke</button>
    </div>
  )
}

export default FetchData
