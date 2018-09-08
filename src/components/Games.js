import React from 'react';
import styled from 'react-emotion';
import Markdown from 'react-remarkable';
import { onComponentDidMount } from 'react-redux-lifecycle';

import { fetchGames } from '../actions';
import { WithStore } from './WithStore';

const Games = ({ games }) => (
    <div>
        { games.map(game => <Game key={game.key} text={game.text} image={game.image} />) }
    </div>
);

const GameDiv = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyContent: 'space-between',

    '@media (min-width: 750px)': {
        gridTemplateColumns: '1fr 1fr',
    }
});

const Screenshot = styled('img')({
    width: '100%',
    height: 'auto',
    margin: 'auto'
});

const Game = ({ text, image }) => (
    <GameDiv>
        <Markdown>
            {text}
        </Markdown>
        <Screenshot src={image} />
    </GameDiv>
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