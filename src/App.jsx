import { useState, useEffect } from 'react'
import './App.css'
const cohort = "2301-ftb-et-web-am"

function App() {
  const [PuppyData, setPuppyData] = useState([]);
  const [puppyId, setPuppyId] = useState(1);
  const [error, setError] = useState(null);

  useEffect(()=>{
  async function FetchPlayers(){
    try{
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`)
      // const result = await response.json();
      const { data } = await response.json() //data: {players: []}
      const { players } =await data; 
      const PuppyData = {players}//[]
      await setPuppyData(PuppyData)
      console.log(PuppyData)
    } catch (err){
      setError(error.message);
    }
  }
  FetchPlayers();
  },[puppyId]);

console.log(PuppyData)

  
  return (
    <div className="App">
      <div>Players</div>
      <div>
        <input type="text" value={puppyId} onChange={event => setPuppyId(event.target.value)}/>
        <p>PuppyId: {puppyId}</p>
        {PuppyData && <p>{PuppyData.name}</p>}
        {error && <p>{error}</p>}
      </div>
      {/* {players.map((dog)=>{
        return <FetchPlayers key={dog.id}
      })} */}
    </div>
  )
}

export default App
