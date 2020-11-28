import { put, takeLatest, call } from "redux-saga/effects";
import api from "../api";
import type from "../actions/constant";

function* fetchUserHandler() {
  try {
    const users = yield call(api.fetchUsers);
    yield put({ type: type.GET_USER_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: type.GET_USER_FAILED });
  }
}

function* userSaga() {
  yield takeLatest(type.GET_USER_REQUEST, fetchUserHandler);
}

export default userSaga;
