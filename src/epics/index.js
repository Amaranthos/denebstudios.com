import { combineEpics } from 'redux-observable';

import { aboutEpics } from './about';
import { gamesEpic } from './games';

export const epics = combineEpics(
    aboutEpics,
    gamesEpic
);