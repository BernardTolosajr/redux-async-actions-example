import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoReducer from '../reducers/todos'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(todoReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers/todos', () => {
      const nextRootReducer = require('../reducers/todos')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
