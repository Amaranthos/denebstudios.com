import React from 'react';
import styled from 'react-emotion';
import Markdown from 'react-remarkable';
import { onComponentDidMount } from 'react-redux-lifecycle';

import { WithStore } from './WithStore';
import { fetchGames } from '../actions';
import { dispatch } from 'rxjs/internal/observable/pairs';

const Games = ({ games }) => (
    <div>
        { games.map(game => <Game key={game.key} text={game.text} />) }
    </div>
);

const Game = (game) => (
    <Markdown>
        {game.text}
    </Markdown>
);

const GamesWithStore = () => (
    <WithStore
        selector={state => ({
            games: state.games
        })}
    >
        {(props, dispatch) => <Games games={props.games} />}
    </WithStore>
);
export const ConnectedGames = onComponentDidMount(fetchGames)(GamesWithStore);