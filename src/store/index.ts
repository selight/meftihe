import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  plugins: [createPersistedState()],
  mutations: {
    signInWithGoogle: function (state,user) {

      state.user = user;
    }
  },
  actions: {
    signInWithGoogle(context){
      return new Promise(((resolve, reject) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
           const user = result.user;
         context.commit('signInWithGoogle',user);
              resolve(result);
            })
            .catch(err => {
              alert("Oops. " + err.message);
              reject(err);
            });
      }))
    }
  },
  modules: {}
});
