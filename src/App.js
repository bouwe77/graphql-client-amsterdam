import React, { useState } from "react";
import graphqlRequest from "./request";
import AllFilmsQuery from "./queries";

const App = () => {
  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    const { allFilms } = await graphqlRequest(AllFilmsQuery);
    setFilms(allFilms.films);
  };

  return (
    <>
      {films.map(film => (
        <div>{film.title}</div>
      ))}
      <button onClick={fetchFilms}>fetch movies</button>
    </>
  );
};

export default App;
