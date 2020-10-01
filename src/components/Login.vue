<template>
  <v-img src="../assets/brush.jpeg" max-height="100%">
    <v-container class="mt-12">
      <v-layout align-center="center" justify-center="center" row wrap>
        <v-flex class="md3 xs10 sm4 lg4 justify-center mb-6">
          <v-img class="mx-auto mb-12" src="../assets/logo.png"></v-img>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="justify-center align-center mt-12">
        <v-btn x-large color="#fcca14" dark v-on:click="login">
          <v-avatar height="30px" width="30px" class="mr-3"
            ><img alt="google picture" src="../assets/google.png"/></v-avatar
          ><span style="color: #1976d2">Login with Google</span></v-btn
        >
      </v-layout>
    </v-container>
  </v-img>
</template>

<script lang="ts">
import Vue from "vue";
import * as firebase from "firebase";

export default Vue.extend({
  name: "Login",

  data: () => ({}),
  methods: {
    login() {
      this.$store.dispatch("signInWithGoogle").then(result => {
        this.$router.push("/home");
      });
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   firebase
    //     .auth()
    //     .signInWithPopup(provider)
    //     .then(result => {
    //       this.$store.state.user = result.user;
    //       this.$router.replace("/home");
    //     })
    //     .catch(err => {
    //       alert("Oops. " + err.message);
    //     });
    }
  }
});
</script>
