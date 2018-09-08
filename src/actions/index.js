import { Types } from './types';

export * from './types';

export const fetchAbout = () => ({ type: Types.ABOUT_REQUESTED });
export const fetchAboutFufilled = about => ({ type: Types.ABOUT_FULFILLED, about });
export const fetchAboutRejected = err => ({ type: Types.ABOUT_REJECTED, err });

export const fetchGames = () => ({ type: Types.GAMES_REQUESTED });

export const submitContact = (email, message) => ({ type: Types.CONTACT_FORM_SUBMITTED, email, message });