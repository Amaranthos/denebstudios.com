import { from, of } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { database } from '../fire';
import { Types, fetchAboutFufilled, fetchAboutRejected } from '../actions';

const fetchAboutEpic = action$ =>
action$.pipe(
    ofType(Types.ABOUT_REQUESTED),
    mergeMap(
        action =>
        from(database.ref('/about').once('value'))
        .pipe(
            map(snap => fetchAboutFufilled(snap.val())),
            catchError(err => of(fetchAboutRejected(err)))
        )
    ));

export const aboutEpics = combineEpics(
    fetchAboutEpic
);