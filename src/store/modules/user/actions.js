import { SET_USER_TOKEN } from '../../actions-type'
import { SAVE_USER_TOKEN } from '../../mutations-type'

export default {
  SET_USER_TOKEN: ({ commit }, jwt) => {
    console.log(jwt)
    commit(SAVE_USER_TOKEN, jwt)
  },
}
