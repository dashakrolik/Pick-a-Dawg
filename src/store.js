import { createStore } from 'redux'
// import reducer from '.'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(enhancer)

export default store
