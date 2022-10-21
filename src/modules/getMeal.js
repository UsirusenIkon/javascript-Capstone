const getMenuList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9fce9cba21msh261de1d8b793679p16b657jsn889eb7c4c6bd',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=16', options);
  return response;
};

export default getMenuList;