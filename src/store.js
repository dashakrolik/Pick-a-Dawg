import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/reducer' // which is shorthand for import ./reducers/index.js
import ReduxThunk from 'redux-thunk'

const enhancer = compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducer, enhancer)

export default store
