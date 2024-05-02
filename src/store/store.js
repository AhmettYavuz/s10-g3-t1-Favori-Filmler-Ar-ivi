import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

const myStore = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default myStore;
