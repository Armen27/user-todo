import { all } from 'redux-saga/effects';
import usersSage from './users/sagas';

export default function* rootSagas() {
    yield all([
        usersSage(),
    ]);
}