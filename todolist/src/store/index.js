import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
// import thunk from 'redux-thunk'
import todoSaga from './sagas'
import createSageMiddleware from 'redux-saga'

const sagaMiddleware = createSageMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)

sagaMiddleware.run(todoSaga)

export default store
