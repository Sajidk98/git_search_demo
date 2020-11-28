import React, { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
// import thunk from "redux-thunk";

import reducers from "./reducers";
import Dashboard from "./containers/Dashboard";
import saga from "./saga";
import type from "./actions/constant";

// const store = createStore(reducers, applyMiddleware(thunk)); // for thunk middle ware
const sagaMiddleWare = createSagaMiddleware(); // for saga
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleWare),
  reduxDevTools
);

sagaMiddleWare.run(saga);

const App = () => {
  useEffect(() => {
    store.dispatch({ type: type.GET_USER_REQUEST });
    console.log(store.getState());
  }, []);

  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
