import { takeLatest } from 'redux-saga/effects';
function* initSaga() {
    yield console.log('saga running')
}
export default function* rootSaga() {
    yield takeLatest("INIT_APP", initSaga);
}
