const getMenuList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a536b66f25mshb7fd4f1a6e752f3p1e8deajsnac85a13670d9',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=16', options);
  return response;
};

export default getMenuList;