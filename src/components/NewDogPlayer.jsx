import React, { useState } from "react";
import { addPlayer } from "../api";

export default function NewDogPlayer() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div>
      <h2>Create a new Player</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newDog = await addPlayer(name, breed);
          console.log("New Dog from API: ", newDog);
          alert(`added ${name}!`);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
        <button>Submit!</button>
      </form>
    </div>
  );
}
