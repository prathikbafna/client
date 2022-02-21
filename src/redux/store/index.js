import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
//default stae of ur application
//middleware [thunk]
const middleware = [thunk];

const store = createStore(
  combineReducer,
  initialState,
  //middleware and redux devtools(for dev env)
  composeWithDevTools(applyMiddleware(...middleware)) //middleware specifications
);

//to get the current state
let currentState = store.getState();

//subscribe listener
//getting the token (for private end points)
store.subscribe(() => {
  //old state in previousState
  let previousState = currentState;
  //recent one in currentState
  currentState = store.getState();
  //can we compare the date from 2 states?
  //based on that can we take a call to update the token?
});

export default store;
