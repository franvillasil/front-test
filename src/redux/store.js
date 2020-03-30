import { createStore, combineReducers } from "redux";
import movies from "./reducers/movies";
import filters from "./reducers/filters";
import loading from "./reducers/loading";

const reducers = combineReducers({
  movies,
  filters,
  loading
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
