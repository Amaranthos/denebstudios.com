import { connect } from 'react-redux';

export const WithStore = connect(
    (state, { selector = s => s }) => ({ state: selector(state) }),
    dispatch => ({ dispatch })
)(({ children, state, dispatch }) => children(state, dispatch));

