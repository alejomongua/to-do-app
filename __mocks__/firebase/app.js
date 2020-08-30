module.exports = {
  initializeApp: () => null,
  analytics: () => null,
  firestore: () => ({
    collection: () => ({
      get: () => ({
        docs: []
      })
    })
  }),
}