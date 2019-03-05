import { createStore } from 'redux'
import DisplayContentReducer from './reducers/DisplayContentReducer' // which is shorthand for import ./reducers/index.js

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(DisplayContentReducer, enhancer)

export default store
