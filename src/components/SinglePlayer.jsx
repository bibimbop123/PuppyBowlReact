import React, {useEffect, useState} from "react";
import {fetchSingleDog}

function SinglePlayer() {
  return <h2>SIngle Player</h2>;
}

export default function SingleDog() {
    const { dogId } = useParams();
  
    const [dog, setDog] = useState(null);
  
    useEffect(() => {
      async function getDog() {
        const dogFromApi = await fetchSingleDog(dogId);
        setDog(dogFromApi);
      }
      getDog();
    }, []);
  
    console.log("Dog: ", dog);
  
    return (
      <div>
        {dog && (
          <ul>
            <li>Name: {dog.name}</li>
            <li>Age: {dog.age}</li>
          </ul>
        )}
      </div>
    );
  }
