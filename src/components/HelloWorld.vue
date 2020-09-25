<template>
  <v-container class="mt-12" fluid>
    <v-layout align-center="center" justify-center="center" row wrap>
      <v-flex class="md3 xs12 sm4 lg6 justify-center mb-6">
        <v-img class="mx-auto mb-12" src="../assets/logo.png"></v-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="justify-center align-center mt-12">
      <v-btn x-large color="#fcca14" dark>
        <v-avatar height="30px" width="30px" class="mr-3"
          ><img src="../assets/google.png"/></v-avatar
        >Login with Google</v-btn
      >
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({})
});
</script>
