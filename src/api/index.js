const COHORT = "2301-ftb-et-web-am"

export async function fetchPlayers(){
    try{
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`)
      // const result = await response.json();
      const apiData = await response.json() // data: {players: []}
      return apiData
    } catch (error){
      setError(error.message);
    }
  }

export async function addPlayer(name, breed){
      try{
          const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`,       
           {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                breed,
              }),
            })
      const newPlayer = await response.json();
      console.log(newPlayer);
    } catch (err) {
      console.error(err);
    }
}

export async function fetchSingleDog(id) {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players/${id}`);
    const singleDog = await response.json();
    console.log("singleDog = ", singleDog);
    return singleDog;
  } catch (error) {
    console.error(error);
  }
}

export async function removePlayer(id) {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players/${id}`, {
      method: "DELETE",
    });
    const deletedPuppy = await response.json();
    if (deletedPuppy.error) throw deletedPuppy.error;
    console.log(4);
    return;
  } catch (error) {
    console.error(
      `Oops, an error deleting a player #${playerId} from the roster! `,
      error
    );
  }
};
