import { combineReducers } from 'redux';

import TodoReducer from './todo/todoReducer';

const allReducers = combineReducers({
    todoReducer: TodoReducer,
});

export default allReducers;
