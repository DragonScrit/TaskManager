import { createStore,combineReducers } from 'redux';
import reducer_TaskList from './reducer_TaskList';

let redusers = combineReducers({
    TaskList: reducer_TaskList,
});

let store = createStore(redusers);
export default store;