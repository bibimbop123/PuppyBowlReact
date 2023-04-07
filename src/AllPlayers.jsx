import { useState, useEffect } from 'react'
const cohort = "2301-ftb-et-web-am"
function AllPlayers (){
    const [puppyData, setPuppyData] = useState([]); 
    const [puppyId, setPuppyId] = useState(1);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
    async function FetchPlayers(){
      try{
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`)
        // const result = await response.json();
        const { data } = await response.json() //data: {players: []}
        const { players } = data; 
         setPuppyData(players)
        console.log(players)
      } catch (err){
        setError(error.message);
      }
    }
    FetchPlayers();
    },[]);
  
  async function addPlayer(){
    try{
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`,        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: '',
              breed: '',
            }),
          })
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
 
    }

    
  
  
    
    return (
      <div className="App">
        <form onSubmit={()=>{}} >
          <label>name</label>
          <input type="text" name="name"/>
          <label>breed</label>
          <input type="text" name="breed"/>
          <button type="submit">submit</button>
        </form>
        <div>Players</div>
        {/* <div>
          <input type="text" value={puppyId} onChange={event => setPuppyId(event.target.value)}/>
        </div> */}
        {puppyData.map((puppy)=>{
         return <div key={puppy.id}>
          <h1>{puppy.name}</h1>
          <button>see details</button>
         <h3>{puppy.breed}</h3>
         <h3>{puppy.status}</h3>
         <img src={puppy.imageUrl} alt="puppyphoto"/>
         </div>
          })}
      </div>
    )}
export default AllPlayers