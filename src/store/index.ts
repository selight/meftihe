import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as firebase from "firebase";
import axios from "axios";


Vue.use(Vuex);
axios.defaults.baseURL = "https://meftihefullstack.herokuapp.com/api/solutions/";
axios.defaults.proxy = false;
export default new Vuex.Store({
  state: {
    user: null,
    recentSearches: ["vue", "node", "problem"],
    problem: {},
    id: null,
    searchResults:{},
  },
  plugins: [createPersistedState()],
  mutations: {
    signInWithGoogle: function(state, user) {
      state.user = user;
    },
    logOut: function(state, user) {
      state.user = user;
    },
    addToRecent: function(state, input) {
      if (input.trim() !== null || input.trim() !== "") {
        state.recentSearches.push(input);
        //TO-DO: whitespace not handled
      }
    },
    create(state, problem) {
      state.problem = problem;
      state.id=problem.id;
    },
    search(state,searchResults){
      state.searchResults=searchResults;
    },
    all(state,all){
      state.searchResults=all;
    }
  },
  actions: {
    signInWithGoogle(context) {
      return new Promise((resolve, reject) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            const user = result.user;
            context.commit("signInWithGoogle", user);
            resolve(result);
          })
          .catch(err => {
            alert("Oops. " + err.message);
            reject(err);
          });
      });
    },
    search(context, searchWord) {
      return new Promise((resolve, reject) => {
        axios
          .post("/search",{title:searchWord})
          .then(response => {
            const searchResults=response.data;
            context.commit("search",searchResults);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logOut(context) {
      return new Promise(resolve => {
        firebase
          .auth()
          .signOut()
          .then(result => {
            const user = null;
            context.commit("logOut", user);
            resolve(result);
          });
      });
    },
    addToRecentSearches(context, input) {
      return new Promise(() => {
        context.commit("addToRecent", input);
      });
    },
    create(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post("/add", data)
          .then(response => {
            const problem = response.data;
            context.commit("create", problem);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getAll(context) {
      return new Promise((resolve, reject) => {
        axios
          .get("/get-all")
          .then(response => {
            const all=response.data.data;
            context.commit("all",all);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    edit(context,data) {
      return new Promise((resolve, reject) => {
        axios
          .put("/update/" + this.state.id,data)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getOne(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .get("/get/"+id)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  modules: {}
});
