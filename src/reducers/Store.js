//@flow
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import LoginReducer from './LoginReducer';
import thunk from 'redux-thunk';
import type {UserNameAction,State} from '../utils/userTypes';

const AppReducers = combineReducers({
    LoginReducer
});

const rootReducer = (state : Object, action : UserNameAction) :State => AppReducers(state, action);

const Store  : Object  = createStore(rootReducer, compose(applyMiddleware(thunk)) );

export default Store;
