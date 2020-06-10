
import { SAVE_USER_STATUS } from "../../actions-type"
import { SET_USER_STATUS } from "../../mutations-type"

export default {
  [SAVE_USER_STATUS]: ({ commit }, status) => {
    commit(SET_USER_STATUS, status)
  },
}
