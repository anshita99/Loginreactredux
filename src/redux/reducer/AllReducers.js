import { combineReducers } from 'redux';
import redForm from './FormReducer';

const allReducers=combineReducers({
    inputs:redForm
})
export default allReducers;