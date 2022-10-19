import './style.css';
import getMenuList from './modules/getMeal.js';
import renderData from './modules/renderData.js';

const loadFoodData = () => {
  getMenuList()
    .then((response) => response.json())
    .then((data) => renderData(data.results));
};

window.onload = loadFoodData();