const getMeal = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9b12e19dcfmsh710e1ac0dde1a54p13a36bjsnd251b54c2243',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', getMeal)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));