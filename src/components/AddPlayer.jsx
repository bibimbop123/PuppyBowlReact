import React from "react";

async function AddPlayer(player){
    try{
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`,       
         {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: player.name,
              breed: player.breed,
            }),
          })
    const newPlayer = await response.json();
    console.log(newPlayer);
  } catch (err) {
    console.error(err);
  }
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const newPlayer = {
      name: nameInput,
      breed:breedInput
    }    
    await AddPlayer(newPlayer);
  }
}
 export default AddPlayer