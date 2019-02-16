import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// Action types
const SET_IMAGE = 'moon/SET_IMAGE';
const SET_TEXT = 'moon/SET_TEXT';
const SET_SUB_TEXT = 'moon/SET_SUB_TEXT';

export const setImage = createAction(SET_IMAGE);
export const setText = createAction(SET_TEXT);
export const setSubText = createAction(SET_SUB_TEXT);

const initialState = Map({
    src: null,
    text: null,
    subText: null
});

export default handleActions({
    [SET_IMAGE]: (state, actions) => {
        return state.set('src', actions.payload);
    },
    [SET_TEXT]: (state, actions) => {
        return state.set('text', actions.payload);
    },
    [SET_SUB_TEXT]: (state, actions) => {
        return state.set('subText', actions.payload);
    }
}, initialState);