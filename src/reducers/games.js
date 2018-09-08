import { Types } from '../actions';

export const gamesReducer = (state = [], action) => {
    switch (action.type) {
        case Types.GAMES_FULFILLED:
            return Object.entries(action.games).map(e => Object.assign({ text: e[1], key: e[0] }));

        case Types.GAMES_REJECTED:
            console.error(action.err);
            return state;

        default:
            return state;
    }
}