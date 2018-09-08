import { combineReducers } from 'redux';

import { aboutReducer as about } from './about';
import { gamesReducer as games } from './games';

export const reducers = combineReducers({
    about,
    games
});