import axios from "axios";
import store from "../store";
import { SAVE_USER_STATUS } from "../store/actions-type";

const STRAPI_URL = `http://localhost:1337`

const axiosInstance = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export default {
  login: async ({ identifier, password }) => {
    return axiosInstance
      .post(`${STRAPI_URL}/auth/local`, { identifier, password })
      .then((data) => {
        console.log(data)
        store.dispatch(SAVE_USER_STATUS, data.data.status)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  logout: async () => {
    return axiosInstance
      .post(`${STRAPI_URL}/logout`)
      .then(() => {
        store.dispatch(SAVE_USER_STATUS, undefined)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  test: async () => {
    const { data } = await axiosInstance
      .get(`${STRAPI_URL}/invoices`)

    console.log(data)
  }
}
