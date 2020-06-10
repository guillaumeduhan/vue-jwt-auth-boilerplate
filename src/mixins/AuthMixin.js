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
      })
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout() {
      Auth.logout()
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
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
  mounted() {
    this.login("Guillaume", "password")
  }
}

export default AuthMixin;