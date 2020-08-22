import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../config/firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function addTodoFirestore (tarea) {
  db.collection('tareas').add(tarea)
}

function * handleTodoFirestore (action) {
  try {
    const response = yield call(network.postData, endpoint, action.payload)

    yield put(actions.getAuthSuccess(response))
  } catch (error) {
    if (error && error.response && error.response.data && error.response.data.mensaje) {
      yield put(actions.addAlert({
        text: error.response.data.mensaje,
        type: 'error'
      }))
    } else {
      yield put(actions.addAlert({
        text: 'Error al iniciar sesion',
        type: 'error'
      }))
    }
    yield put(actions.getAuthError(error))
  }
}


export default function * saga () {
  yield all([
    todoSaga(),
  ])
}
