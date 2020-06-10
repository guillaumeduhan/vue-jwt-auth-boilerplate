export default {
  isUserLoggedIn: (state) => {
    return state.status === 'Authenticated'
  },
  getUser: (state) => state,
}
