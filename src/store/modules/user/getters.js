export default {
  isUserLoggedIn: (state) => {
    return state.token ? true : false
  },
  getUser: (state) => state,
}
