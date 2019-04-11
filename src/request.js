require("isomorphic-fetch");

export const graphqlRequest = query => {
  const url = `https://swapi.apis.guru/`;

  return new Promise(async resolve => {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(res => {
        resolve(res.data);
      });
  });
};
