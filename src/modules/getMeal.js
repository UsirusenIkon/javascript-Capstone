const getMenuList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a1340d96ebmsh2e9b7fc81699c5ep1cc9f6jsn6c8dc6245a95',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options);
  return response;
};

export default getMenuList;