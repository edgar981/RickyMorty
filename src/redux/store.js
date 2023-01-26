import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'; //Para que funcione reduxdevtools desde el browser
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;