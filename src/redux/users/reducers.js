import { handleActions } from 'redux-actions';

import {
    RemoveUserRequest, RemoveUserSuccess, RemoveUserError,
    CreateUserRequest, CreateUserSuccess, CreateUserError,
    UpdateUserRequest, UpdateUserSuccess, UpdateUserError
} from "./actions";

const initialState = {
  removeUserSuccess: false,
  removeUserError: false,
  usersData: [],
  createUserSuccess: false,
  createUserError: false,
  updateUserSuccess: false,
  updateUserError: false,
};

let initialUserId = 0;

const reducer = handleActions({
    [RemoveUserRequest]: (state) => ({
        ...state,
        removeUserSuccess: false,
        removeUserError: false,
        createUserSuccess: false,
    }),
    [RemoveUserError]: (state) => ({
        ...state,
        removeUserError: true,
        removeUserSuccess: false,
    }),
    [RemoveUserSuccess]: (state, { payload }) => ({
        ...state,
        removeUserSuccess: true,
        removeUserError: false,
        createUserSuccess: false,
        usersData: state.usersData.filter(data => data.id !== payload)
    }),
    [CreateUserRequest]: (state) => ({
       ...state,
        createUserSuccess: false,
        removeUserSuccess: false,
    }),
    [CreateUserSuccess]: (state, { payload } ) => ({
       ...state,
        createUserSuccess: true,
        removeUserSuccess: false,
        createUserError: false,
        usersData: [...state.usersData, { ...payload, id: initialUserId++ }],
    }),
    [CreateUserError]: (state) => ({
       ...state,
        createUserSuccess: false,
        createUserError: true,
    }),
    [UpdateUserRequest]: (state) => ({
       ...state,
        updateUserSuccess: false,
        updateUserError: false,
    }),
    [UpdateUserSuccess]: (state, { payload } ) => {
        const filteredData = state.usersData.filter(data => data.id !== payload.id);
        payload.isEditMode = false;
        const data = [
             ...filteredData,
            { ...payload }
        ];
        return {
            ...state,
            updateUserSuccess: true,
            usersData: data,
            updateUserError: false,
        }
    },
    [UpdateUserError]: (state) => ({
        ...state,
        updateUserSuccess: false,
        updateUserError: true,
    }),
}, initialState);

export default reducer;