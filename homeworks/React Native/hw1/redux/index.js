import { createStore, combineReducers } from "redux";
import { updateAS, getDataFromAS } from "./AsyncStorage";

import {
  MODULE_NAME as listsModuleName,
  reducer as listsReducer,
} from "./data";
import {
  MODULE_NAME as settingsModuleName,
  reducer as settingsReducer,
} from "./userData";

const rootReducer = combineReducers({
  [listsModuleName]: listsReducer,
  [settingsModuleName]: settingsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => updateAS(store));

getDataFromAS(store);

export default store;
