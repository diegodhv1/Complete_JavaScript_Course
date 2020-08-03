// Global app controller
import Search from './models/Search';
import {elements} from './views/base';
import * as searchView from './views/searchView';
const state = {}

const contollerSearch = async () => {
  // 1. Get query
  const query = searchView.getInput();

  if (query) {

    // 2. Create object
    state.search = new Search(query);

    //3. prepare UI
    searchView.clearInput();
    searchView.clearList();

    //4. search recipes
    await state.search.getResults();

    //5. render results
    searchView.renderResult(state.search.result);

  }
}

elements.searchButton.addEventListener('submit', e => {
  e.preventDefault();
  contollerSearch();
});