/* eslint-disable max-len */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import UserNameReducer from './Auth/reducer';
import UserInfoReducer from './UserInfo/reducer';
import UserDateReducer from './Users/reducer';

export const rootReduce = combineReducers({ auth: UserNameReducer, info: UserInfoReducer, users: UserDateReducer });
export const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(thunk)));
