import { useState, useEffect } from "react";
import { fetchPlayers } from "../api";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers() {
      const response = await fetchPlayers();
      if (response.success) {
        setDogs(response.data.players);
      } else {
        setError(response.error);
      }
    }
    getPlayers();
  }, []);

  return (
    <div>
      {dogs.map((dog) => {
        return (
          <p
            key={dog.id}
            onClick={() => {
              navigate(`/${dog.id}`);
            }}
          >
            {dog.name}

            <button> See Details</button>
            <button> Remove Player</button>
          </p>
        );
      })}
    </div>
  );
}
