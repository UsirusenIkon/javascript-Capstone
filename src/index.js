import './style.css';
import getMenuList from './modules/getMeal.js';
import renderData from './modules/renderData.js';

const loadFoodData = async () => {
  getMenuList()
    .then((response) => renderData(response.result));
};
window.onload = loadFoodData();