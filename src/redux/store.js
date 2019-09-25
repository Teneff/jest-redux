import { combineReducers, createStore } from "redux";
import something from "./reducer/something";
import { devToolsEnhancer } from "redux-devtools-extension";

export default createStore(
  combineReducers(
    {
      something
    },
    process.env.NODE_ENV === 'development' ? devToolsEnhancer() : undefined
  )
);
