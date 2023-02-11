import {legacy_createStore as createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { calculatorReducer } from "./reducer";

export const store = createStore(calculatorReducer,applyMiddleware(thunk));
