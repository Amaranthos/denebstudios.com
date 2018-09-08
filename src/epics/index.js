import { combineEpics } from 'redux-observable';
import { aboutEpics } from './about';

export const epics = combineEpics(
    aboutEpics
);