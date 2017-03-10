
import { combineReducers } from 'redux';
import index  from './index'
import counter from'./counter'

const rootReducer = combineReducers({
    index,
    counter
});
export default rootReducer;