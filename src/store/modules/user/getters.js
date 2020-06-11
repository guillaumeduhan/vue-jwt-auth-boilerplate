export default {
  getUserStatus: (state) => {
    return state.status === 'Authenticated'
  },
  getUser: (state) => state,
}
