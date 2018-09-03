import ReactGA from 'react-ga';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { epics } from './epics';
import { reducers } from './reducers';

const epicMiddleware = createEpicMiddleware(epics);

ReactGA.initialize('UA-125013636-1');
ReactGA.pageview('/');

const persistConfig = {
    key: 'root'
    , storage
};

export const store = createStore(
    persistReducer(persistConfig, reducers)
    , {}
    , composeWithDevTools(applyMiddleware(epicMiddleware))
);
