const initialState = require('../../src/testHelpers/initialState').default

module.exports = (function () {
  const _tareas = { ...initialState.todos }
  return {
    initializeApp: () => null,
    analytics: () => null,
    firestore: () => ({
      collection: () => ({
        get: () => ({
          docs: _tareas.list.map(index => ({
            data: () => _tareas.byId[index],
            id: index,
          }))
        }),
        add: (tarea) => {
          const newIndex = String(_tareas.list.length)
          _tareas.list.push(newIndex)
          _tareas.byId[newIndex] = tarea
          return { id: newIndex }
        },
      })
    }),
  }
})()
