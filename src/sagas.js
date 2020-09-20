import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {REQUEST_HELLO_WORLD, RECEIVE_HELLO_WORLD} from './actions';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
   try {
     // do api call;
      yield put({type: "RECEIVE_HELLO_WORLD", text: "Hello world from redux saga"});
   } catch (e) {
      yield put({type: "RECEIVE_HELLO_WORLD", text: "Hello world from redux saga"});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest("REQUEST_HELLO_WORLD", helloWorld);
}

export default mySaga;