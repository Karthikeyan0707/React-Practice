import { combineReducer } from "react-redux";
import operationsReducer from "./reducers/operations";

const rootReducer = combineReducer({
  operationsReducer,
});

export default rootReducer;
