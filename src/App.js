import React, { useState } from "react";
import { request } from "graphql-request";

import { AllFilmsQuery, AllSpeciesQuery } from "./queries";

const App = () => {
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const url = `https://swapi.apis.guru/`;

  const fetchFilms = async () => {
    const { allFilms } = await request(url, AllFilmsQuery);
    setFilms(allFilms.films);
  };

  const fetchSpecies = async () => {
    const howMany = 2;
    const { allSpecies } = await request(url, AllSpeciesQuery, {
      first: howMany
    });
    setSpecies(allSpecies.species);
  };

  return (
    <>
      <div>
        <button onClick={fetchFilms}>fetch movies</button>
        {films.map(film => (
          <div key={film.id}>{film.title}</div>
        ))}
      </div>
      <div>
        <button onClick={fetchSpecies}>fetch species</button>
        {species.map(specie => (
          <div key={specie.id}>{specie.name}</div>
        ))}
      </div>{" "}
    </>
  );
};

export default App;
