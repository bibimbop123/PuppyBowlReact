import { useState, useEffect } from "react";
import { fetchPlayers } from "../api";
import React from "react";
import { useNavigate } from "react-router-dom";
import { removePlayer } from "../api";

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
          <div className="dogPlayer" key={dog.id}>
            <p>{dog.name}</p>
            <div className="dogPicture">
              {" "}
              <img
                src={dog.imageUrl}
                alt="picture of dog"
                width="300px"
                height="300px"
              />
            </div>

            <button
              onClick={() => {
                navigate(`/${dog.id}`);
              }}
            >
              See Details
            </button>
            <button
              onClick={async () => {
                await removePlayer(`/${dog.id}`);
                const response = await fetchPlayers();
                if (response.success) {
                  setDogs(response.data.players);
                } else {
                  setError(response.error);
                }
              }}
            >
              {" "}
              Remove Player
            </button>
          </div>
        );
      })}
    </div>
  );
}
