const getMenuList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9b12e19dcfmsh710e1ac0dde1a54p13a36bjsnd251b54c2243',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',

    },
  };
  await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

getMenuList();