import React from 'react';
import { connect } from 'react-redux';
import { injectGlobal } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

injectGlobal({
    'html, body, #root': {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        minWidth: 320
    },
    html: {
        fontFamily: 'Roboto, sans-serif',
        overflowY: 'scroll'
    }
});

const theme = {

};

export const Themer = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);
