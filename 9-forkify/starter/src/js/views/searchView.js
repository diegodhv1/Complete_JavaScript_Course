import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
  const markup = `
  <li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="Test">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${recipe.title}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
  </li>
  `;
  elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearList = () => {
  elements.searchResultList.innerHTML = "";
};

export const renderResult = recipes => {
  recipes.forEach(renderRecipe);
}