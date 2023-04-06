import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const cohort = "2301-ftb-et-web-am"

function App() {
  useEffect(()=>{
    fetchPlayers()
  },[])
  const [players, setPlayers] = useState([])

  async function fetchPlayers(){
    try{
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`)
      // const result = await response.json();
      const { data } = await response.json() //data: {players: []}
      const { players } = data; //[]
      await setPlayers(players)
    } catch (err){
      console.error(err)
    }
  }
console.log(players)

  
  return (
    <div className="App">
      <div>Hello World</div>
    </div>
  )
}

export default App
