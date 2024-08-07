const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchAPIData = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

export const fetchSingleCharacter = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();
  console.log("datadatadata", data);
  return data;
};

export const fetchAllEpisodes = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode`);
  const data = await res.json();
  return data;
};

export const formatAirDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
