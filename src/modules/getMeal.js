const getMenuList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0cb7438a2mshbd7cdef448c965cp18572ejsne962bf93bb7f',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=10', options);
  const data = await response.json();
  return data;
};

export default getMenuList;