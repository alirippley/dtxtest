import { call, takeLatest } from 'redux-saga/effects';
import {test} from '../services'
function* initSaga() {
    yield console.log('saga running')
    let test2 = yield call(test);
    console.log('ttt', test2)
}
export default function* rootSaga() {
    yield takeLatest("INIT_APP", initSaga);
}
