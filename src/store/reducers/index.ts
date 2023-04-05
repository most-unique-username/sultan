import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  basket: basketReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>