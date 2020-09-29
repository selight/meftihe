import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";

Vue.config.productionTip = false;
const app = '';
const config = {
  apiKey: "AIzaSyBw2GLIjilWyaGn5kE2GWjxkbXshofDoU0",
  authDomain: "mefithe.firebaseapp.com",
  databaseURL: "https://mefithe.firebaseio.com",
  projectId: "mefithe",
  storageBucket: "mefithe.appspot.com",
  messagingSenderId: "1069742331863",
  appId: "1:1069742331863:web:4645c9ebcfd9beadf89d92",
  measurementId: "G-NB4FG01FH4"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
}});

