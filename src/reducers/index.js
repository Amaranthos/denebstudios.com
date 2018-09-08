import { combineReducers } from 'redux';

import { aboutReducer as about } from './about';

export const reducers = combineReducers({
    about
});