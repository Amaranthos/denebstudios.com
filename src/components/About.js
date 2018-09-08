import React from 'react';
import styled from 'react-emotion';
import Markdown from 'react-remarkable';
import { onComponentDidMount } from 'react-redux-lifecycle';

import { WithStore } from './WithStore';
import { fetchAbout } from '../actions';
import { dispatch } from 'rxjs/internal/observable/pairs';

const About = ({ about }) => (
    <Markdown>
        { about }
    </Markdown>
);

const AboutWithStore = () => (
    <WithStore
        selector={state => ({
            about: state.about
        })}
    >
        {(props, dispatch) => <About about={props.about} /> }
    </WithStore>
);
export const ConnectedAbout = onComponentDidMount(fetchAbout)(AboutWithStore);