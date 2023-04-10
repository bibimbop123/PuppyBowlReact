
async function AddPlayer(){
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
    const newPlayer = await response.json();
    console.log(newPlayer);
  } catch (err) {
    console.error(err);
  }
}
 export default AddPlayer