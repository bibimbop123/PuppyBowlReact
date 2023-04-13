import React, { useEffect, useState } from "react";
import { fetchSingleDog } from "../api/index";
import { useParams } from "react-router-dom";

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
