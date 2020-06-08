import { SAVE_USER_TOKEN } from '../../mutations-type'

export default {
  [SAVE_USER_TOKEN]: (state, token) => {
    state.jwt = token
  },
}
