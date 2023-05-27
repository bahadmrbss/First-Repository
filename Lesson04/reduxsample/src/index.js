import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, compose, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const allEnhancers = compose(
applyMiddleware(thunk,logger),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// createStore(Reducer, InitialData, Extension)

const myStore = createStore(
  rootReducer(),
  {
    productReducer: [{ name: "Sony", type: "Mp3 Player" }],
    myReducer: "First Text",
  },
  allEnhancers
);

//Create your store
// console.log("Old State", myStore.getState());
/*
const action = {
  type: "changeTheState",
  payload: { newState: "My new State" },
};

const action2 = {
  type: "changeTheState",
  payload: { newState: "My new State 2" },
};

myStore.subscribe(() => {
//  console.log("subscribe runned.-Store Updated.", myStore.getState());
});

myStore.dispatch(action);
// console.log("Last State:", myStore.getState());

myStore.dispatch(action2);
// console.log("Last State:", myStore.getState());

const action3={
  type:'userUpdate',
  payload:{user:'Tommy'}
} 
myStore.dispatch(action3)
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>
);


