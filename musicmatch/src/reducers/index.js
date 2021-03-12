import index from './indexChange';
import genreLength from './genreLength';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    idx: index,
    genreLength: genreLength
});

export default allReducers;