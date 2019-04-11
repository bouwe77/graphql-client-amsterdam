export const AllFilmsQuery = `{ 
        allFilms { 
          films { 
            id
            title 
          } 
        } 
}
`;

export const AllSpeciesQuery = `query allSpecies($first: Int) {
  allSpecies(first: $first){
    species{
      name
    }
  }
}`;
