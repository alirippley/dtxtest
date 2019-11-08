import { takeLatest } from 'redux-saga/effects';
function* initSaga() {
    yield console.log('saga running')
}
function* rootSaga() {
    yield takeLatest("INIT_APP", initSaga);
}

export default rootSaga;