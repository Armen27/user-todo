import { takeLatest, put } from 'redux-saga/effects';
import {
    RemoveUserRequest, RemoveUserSuccess, RemoveUserError,
    CreateUserRequest, CreateUserSuccess, CreateUserError,
    UpdateUserRequest, UpdateUserSuccess, UpdateUserError
} from "./actions";

function* RemoveUser (payload) {
    try {
        yield put(RemoveUserSuccess(payload.payload));
    } catch (e) {
        yield put(RemoveUserError());
    }
}

function* CreateUser (action) {
    try {
        yield put(CreateUserSuccess(action));
    } catch (e) {
        yield put(CreateUserError());
    }
}

function* UpdateUser (action) {
    const { payload } = action
    try {
        yield put(UpdateUserSuccess(payload))
    } catch (e) {
        yield put(UpdateUserError());
    }
}

export default function* () {
    yield takeLatest(RemoveUserRequest, RemoveUser);
    yield takeLatest(CreateUserRequest, CreateUser);
    yield takeLatest(UpdateUserRequest, UpdateUser);
}