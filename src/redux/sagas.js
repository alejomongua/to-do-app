import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as firebase from 'firebase/app'
import * as actions from './actions'
import 'firebase/analytics'
import 'firebase/firestore'
import firebaseConfig from '../../config/firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

function addTodoFirestore (tarea) {
  db.collection('tareas').add(tarea)
}

function * handleTodoFirestore (action) {
  try {
    yield call(addTodoFirestore, action.payload)
    yield put(actions.addTodoSuccess(action.payload))
  } catch (error) {
    if (error && error.response && error.response.data && error.response.data.mensaje) {
      yield put(actions.addAlert({
        text: error.response.data.mensaje,
        type: 'error'
      }))
    } else {
      console.log(error)
      yield put(actions.addAlert({
        text: 'Error al guardar la tarea',
        type: 'error'
      }))
    }
  }
}

function * watchTodoFirestore () {
  yield takeEvery(actions.ADD_TODO, handleTodoFirestore)
}

export default function * saga () {
  yield all([
    watchTodoFirestore(),
  ])
}
