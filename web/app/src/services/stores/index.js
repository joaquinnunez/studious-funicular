import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  enhancers.push(applyMiddleware(...middleware))
  const store = createStore(rootReducer, compose(...enhancers))
  sagaMiddleware.run(rootSaga)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');  // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store
}
