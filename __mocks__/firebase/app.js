const tareas = [
  {
    text: 'Tarea 1',
    completed: false,
  },
  {
    text: 'Tarea 2',
    completed: true,
  },
  {
    text: 'Tarea 3',
    completed: false,
  },
  {
    text: 'Tarea 4',
    completed: true,
  },
  {
    text: 'Tarea 5',
    completed: false,
  },
]

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