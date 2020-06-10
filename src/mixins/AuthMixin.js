import { mapGetters } from "vuex"
import Auth from "../services/auth"

const AuthMixin = {
  computed: {
    ...mapGetters(["isUserLoggedIn"])
  },
  methods: {
    login(identifier, password) {
      Auth.login({
        identifier,
        password
      });
    },
    logout() {
      Auth.logout()
    }
  },
  mounted() {
    this.login("", "")
  }
}

export default AuthMixin;