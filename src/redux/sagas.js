import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as firebase from 'firebase/app'
import * as actions from './actions'
import 'firebase/analytics'
import 'firebase/firestore'
import firebaseConfig from '../../config/firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

function * addTodoFirestore (tarea) {
  return yield db.collection('tareas').add(tarea)
}

function * handleAddTodoFirestore (action) {
  try {
    const response = yield call(addTodoFirestore, action.payload)
    const nuevaTarea = {...action.payload, key: response.id}
    yield put(actions.addTodoSuccess(nuevaTarea))
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

function * watchAddTodoFirestore () {
  yield takeEvery(actions.ADD_TODO, handleAddTodoFirestore)
}

function * getAllTodoFirestore (tarea) {
  return yield db.collection('tareas').add(tarea)
}

function * handleGetAllTodoFiretore (action) {
  try {
    const response = yield call(getAllTodoFirestore, action.payload)
    const nuevaTarea = {...action.payload, key: response.id}
    yield put(actions.addTodoSuccess(nuevaTarea))
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

function * watchGetAllTodoFiretore () {
  yield takeEvery(actions.ADD_TODO, handleGetAllTodoFiretore)
}

function * toggleTodoFirestore (tarea) {
  return yield db.collection('tareas').add(tarea)
}

function * handleToggleTodoFirestore (action) {
  try {
    const response = yield call(toggleTodoFirestore, action.payload)
    const nuevaTarea = {...action.payload, key: response.id}
    yield put(actions.addTodoSuccess(nuevaTarea))
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

function * watchToggleTodoFirestore () {
  yield takeEvery(actions.ADD_TODO, handleToggleTodoFirestore)
}

export default function * saga () {
  yield all([
    watchAddTodoFirestore(),
    watchGetAllTodoFiretore(),
    watchToggleTodoFirestore(),
  ])
}
