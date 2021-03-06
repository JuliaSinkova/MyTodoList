import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

export const store = createStore(rootReducer, composeWithDevTools());
export const persist = persistStore(store);
