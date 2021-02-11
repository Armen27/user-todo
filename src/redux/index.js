import { combineReducers } from 'redux';
import user from './users/reducers'

const AppReducer = combineReducers({
    user,
});

const rootReducer = (state, action) => {
    let newState;
    if (action.type === 'RESET') {
        if (state && state.app) {
            const { app } = state;
            newState = { app };
        } else {
            newState = undefined;
        }
    } else {
        newState = state;
    }

    return AppReducer(newState, action);
};

export default rootReducer;