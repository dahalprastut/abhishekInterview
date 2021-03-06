import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );
  sagaMiddleware.run(sagas);
  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducers = require("./reducers");
      store.replaceReducer(nextRootReducers);
    });
  }
  return store;
}
