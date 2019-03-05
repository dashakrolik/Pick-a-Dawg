import { createStore, applyMiddleware, compose } from 'redux'
import levelUpReducer from './reducers/levelUpReducer' // which is shorthand for import ./reducers/index.js
import ReduxThunk from 'redux-thunk'

const enhancer = compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(levelUpReducer, enhancer)

export default store
