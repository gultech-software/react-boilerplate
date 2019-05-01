import { combineReducers } from 'redux';

import TodoReducer from './todoReducer';

const allReducers = combineReducers({
    todoReducer: TodoReducer,
});

export default allReducers;
