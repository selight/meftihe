import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as firebase from "firebase";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://localhost:3200/";
export default new Vuex.Store({
  state: {
    user: null,
    recentSearches: ["vue", "node", "problem"]
  },
  plugins: [createPersistedState()],
  mutations: {
    signInWithGoogle: function(state, user) {
      state.user = user;
    },
    logOut: function(state, user) {
      state.user = user;
    },
      addToRecent:function (state,input) {
          if (input.trim() !== null || input.trim() !== "") {
              state.recentSearches.push(input);
              //TO-DO: whitespace not handled
          }
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
          .get("/solutions" + searchWord)
          .then(response => {
            resolve(response);
          })
          .catch(error => reject(error));
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
      addToRecentSearches(context,input){
        return new Promise(() => {

            context.commit("addToRecent",input)
        })
      }
  },
  modules: {}
});
