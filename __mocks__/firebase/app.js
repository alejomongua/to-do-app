const tareas = require('../../src/testHelpers/initialState')

module.exports = {
  initializeApp: () => null,
  analytics: () => null,
  firestore: () => ({
    collection: () => ({
      get: () => ({
        docs: tareas.map((tarea, index) => ({
          data: () => tarea,
          id: String(index),
        }))
      })
    })
  }),
}