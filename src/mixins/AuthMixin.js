import { mapGetters } from "vuex"
import Auth from "../services/auth"

const AuthMixin = {
  computed: {
    ...mapGetters(["getUserStatus"])
  },
  methods: {
    login(identifier, password) {
      Auth.login({
        identifier,
        password
      })
    },
    logout() {
      Auth.logout()
    },
    test() {
      Auth.test()
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
}

export default AuthMixin;