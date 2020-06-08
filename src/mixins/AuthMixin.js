import { mapGetters } from "vuex"
import Auth from "../services/auth"

const AuthMixin = {
  computed: {
    ...mapGetters(["isUserLoggedIn"])
  },
  mounted() {
    Auth.login({
      identifier: "",
      password: ""
    });
  }
}

export default AuthMixin;