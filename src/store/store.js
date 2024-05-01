import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import logger from "redux-logger";

const myStore = createStore(reducer, applyMiddleware(logger));

export default myStore;
