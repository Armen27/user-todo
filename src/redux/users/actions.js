import { createAction } from 'redux-actions';

export const CreateUserRequest = createAction('CREATE_USER_REQUEST');
export const CreateUserSuccess = createAction('CREATE_USER_SUCCESS');
export const CreateUserError = createAction('CREATE_USER_ERROR');

export const RemoveUserRequest = createAction('REMOVE_USER_REQUEST');
export const RemoveUserSuccess = createAction('REMOVE_USER_SUCCESS');
export const RemoveUserError = createAction('REMOVE_USER_ERROR');

export const UpdateUserRequest = createAction('UPDATE_USER_REQUEST');
export const UpdateUserSuccess = createAction('UPDATE_USER_SUCCESS');
export const UpdateUserError = createAction('UPDATE_USER_ERROR');
