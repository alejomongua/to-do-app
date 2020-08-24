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

function * getAllTodoFirestore () {
  return yield db.collection('tareas').get()
}

function * handleGetAllTodoFiretore (action) {
  try {
    const response = yield call(getAllTodoFirestore, action.payload)
    console.log(response)
    yield put(actions.getListTodoSuccess(response))
  } catch (error) {
    if (error && error.response && error.response.data && error.response.data.mensaje) {
      yield put(actions.addAlert({
        text: error.response.data.mensaje,
        type: 'error'
      }))
    } else {
      console.log(error)
      yield put(actions.addAlert({
        text: 'Error al traer la lista de tareas',
        type: 'error'
      }))
    }
  }
}

function * watchGetAllTodoFiretore () {
  yield takeEvery(actions.GET_LIST_TODO, handleGetAllTodoFiretore)
}

function * updateTodoFirestore (payload) {
  return yield db.collection('tareas').doc(payload.id).set(payload.nuevosValores)
}

function * handleUpdateTodoFirestore (action) {
  try {
    const response = yield call(updateTodoFirestore, action.payload)
    console.log(response)
    yield put(actions.updateTodoSuccess(action.payload))
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

function * watchUpdateTodoFirestore () {
  yield takeEvery(actions.UPDATE_TODO, handleUpdateTodoFirestore)
}

export default function * saga () {
  yield all([
    watchAddTodoFirestore(),
    watchGetAllTodoFiretore(),
    watchUpdateTodoFirestore(),
  ])
}
