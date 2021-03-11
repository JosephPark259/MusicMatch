import addPlayist from './addPlayist';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    addPlayist: addPlayist
});

export default allReducers;