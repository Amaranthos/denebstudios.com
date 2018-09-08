import { from, of } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { database } from '../fire';
import { Types, fetchGamesFufilled, fetchGamesRejected } from '../actions';

const fetchGamesEpic = action$ =>
    action$.pipe(
        ofType(Types.GAMES_REQUESTED),
        mergeMap(
            action =>
                from(database.ref('/games').once('value'))
                    .pipe(
                        map(snap => fetchGamesFufilled(snap.val())),
                        catchError(err => of(fetchGamesRejected(err)))
                    )
        ));

export const gamesEpic = combineEpics(
    fetchGamesEpic
);