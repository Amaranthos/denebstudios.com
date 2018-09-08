import { Types } from '../actions';

export const aboutReducer = (state = '', action) => {
    switch (action.type) {
        case Types.ABOUT_FULFILLED:
            return action.about;

        case Types.ABOUT_REJECTED:
            console.error(action.err);
            return state;

        default:
            return state;
    }
}