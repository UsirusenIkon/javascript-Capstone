const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getJsonObj = await response.json();
  const result = getJsonObj.slice(0, 18);
  console.log(result);
  return result;
};

export default getMovies;