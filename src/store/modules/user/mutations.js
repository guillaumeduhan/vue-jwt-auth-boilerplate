import { SET_USER_STATUS } from '../../mutations-type'

export default {
  [SET_USER_STATUS]: (state, status) => {
    state.status = status
  },
}
