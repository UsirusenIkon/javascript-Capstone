import './style.css';
import getMovies from './modules/getMovies.js';
import renderData from './modules/renderData.js';

getMovies();

const loadFoodData = () => {
  renderData(getMenuList());
};

window.onload = loadFoodData();