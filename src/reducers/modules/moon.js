import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// Action types
const SET_IMAGE = 'moon/SET_IMAGE';
const SET_USER_IMAGE = 'moon/SET_USER_IMAGE';

export const setImage = createAction(SET_IMAGE);
export const setUserImage = createAction(SET_USER_IMAGE);

const initialState = Map({
    src: null,
    userSrc: null
});

export default handleActions({
    [SET_IMAGE]: (state, actions) => {
        return state.set('src', actions.payload);
    },
    [SET_USER_IMAGE]: (state, actions) => {
        return state.set('userSrc', actions.payload);
    },
}, initialState);