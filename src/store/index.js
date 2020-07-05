import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resources: [],
    resource: {},
    singleresource: {},
    users: [],
    more: [],
    user: {},
    name: "",
    job: "",
  },
  mutations: {
    Set_Resources(state, resources) {
      state.resources = resources;
    },
    Set_Resource(state, resource) {
      state.resource = resource;
    },
    set_Single(state, singleresource) {
      state.singleresource = singleresource;
    },
    Set_Users(state, users) {
      state.users = users;
    },
    Set_MoreUsers(state, more) {
      state.more = more;
    },
    Set_User(state, user) {
      state.user = user;
    },
  },
  actions: {
    async getResources({ commit }) {
      axios
        .get("https://reqres.in/api/unknown")
        .then((res) => {
          if (!res.data.data.length) {
            Vue.$toast.error("Not Found Any Data Here");
          } else {
            commit("Set_Resources", res.data.data);
          }
        })
        .catch((err) => {
          Vue.$toast.error(err.message);
        });
    },
    async getSingleResource({ commit }, param) {
      axios
        .get(`https://reqres.in/api/unknown/${param}`)
        .then((res) => {
          if (!res.data.data) {
            Vue.$toast.error("Not Found Any Data Here");
          } else {
            this.resource = res.data.data;
            console.log(this.resource);
            this.singleresource = res.data.ad;
            commit("Set_Resource", res.data.data);
            commit("set_Single", res.data.ad);
            console.log(this.singleresource);
          }
        })
        .catch((err) => {
          Vue.$toast.error(err.message);
        });
    },
    async getUsers({ commit }, page) {
      console.log(page);
      axios
        .get("https://reqres.in/api/users?page=" + page)
        .then((res) => {
          commit("Set_Users", res.data.data);
          commit("Set_MoreUsers", res.data);

          if (!res.data.data.length) {
            Vue.$toast.error("Not Found Any Data Here");
          } else {
            this.users = res.data.data;
          }
        })
        .catch((err) => {
          Vue.$toast.error(err.message);
        });
    },
    async getUser({ commit }, param) {
      axios.get(`https://reqres.in/api/users/${param}`).then((res) => {
        console.log(res.data.data);
        commit("Set_User", res.data.data);
      });
    },
  },
  modules: {},
});
