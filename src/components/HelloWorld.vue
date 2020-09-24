<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs3>
        <v-card height="500px"></v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container
          style="position: relative;top: 50%;"
          class="text-xs-center"
        >
          <v-card flat>
            <v-card-actions>
              <v-btn primary large block>Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
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
