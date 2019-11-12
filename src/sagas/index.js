import { takeLatest } from 'redux-saga/effects';
import {test} from '../services'
function* initSaga() {
    yield console.log('saga running')
    yield test()
}
export default function* rootSaga() {
    yield takeLatest("INIT_APP", initSaga);
}
