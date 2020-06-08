import * as a from "../store/actions-type"
import axios from "axios";
import store from "../store/index";

const STRAPI_URL = `http://localhost:1337`

const axiosInstance = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "", // retrieve auth_token
  },
});

export default {
  login: async (payload) => {
    return axiosInstance
      .post(`${STRAPI_URL}/auth/local`, payload)
      .then((data) => {
        store.dispatch(a.SET_USER_TOKEN, data.data.jwt)
      })
      .catch((err) => {
        return err
      })
  },
}
