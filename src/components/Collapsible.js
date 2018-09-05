import styled from 'react-emotion';
import React, { Component } from 'react';

const Div = styled('div')({
    marginTop: '.5rem'
});

const Clickable = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingLeft: '.5rem',
    opacity: '.9'
});

const Title = styled('h2')({
    color: '#FFFFFF',
    opacity: '.8',
    paddingLeft: '1rem',
    margin: '0.5rem 0',
    fontSize: '.75rem'
});

const Children = styled('div')({
    margin: '.5rem 1rem',
});

const Arrow = styled('i')(p => ({
    border: 'solid #FFFFFF',
    borderWidth: '0 .25em .25em 0',
    display: 'inline-block',
    padding: 3,
    opacity: p.opacity
}));

const RightArrow = styled(Arrow)({
    transform: 'rotate(-45deg)'
});

const DownArrow = styled(Arrow)({
    transform: 'rotate(45deg)'
});

export class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: props.expanded
         };
    }

    render() {
        return (
            <Div>
                <Clickable onClick={() => this.setState({ expanded: !this.state.expanded })} >
                    { this.state.expanded ? <DownArrow opacity='.8' /> : <RightArrow opacity='.8' /> }
                    <Title>{ this.props.title }</Title>
                </Clickable>
                {this.state.expanded &&
                    <Children>
                        { this.props.children }
                    </Children>
                }
            </Div>
        );
    }
}
