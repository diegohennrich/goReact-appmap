import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ducks from './ducks'
import sagas from './sagas'

const sagaMiddlewares = createSagaMiddleware()
const middlewares = [sagaMiddlewares]

const composer = applyMiddleware(...middlewares)

const Store = createStore(ducks, composer)
sagaMiddlewares.run(sagas)

export default Store
