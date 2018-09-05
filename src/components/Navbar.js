import React from 'react';
import styled from 'react-emotion';

const Header = styled('header')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    '@media (min-width: 500px)': {
        alignItems: 'start',
    }
});

const Title = styled('h1')({
    color: '#FFFFFF',
    opacity: '.9',
    '@media (min-width: 500px)': {
        paddingLeft: '1rem',
    }
});

export const Navbar = ({ title }) => (
    <Header>
        <Title>{ title }</Title>
    </Header>
);