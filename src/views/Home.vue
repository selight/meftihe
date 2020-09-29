<template>
  <v-img src="../assets/back.jpeg" min-height="100%">
    <div class="home">
      <search />
      <v-fab-transition>
        <v-btn
          v-show="!hidden"
          color="#fcca14"
          dark
          absolute
          bottom
          right
          class="mb-12"
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </v-img>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import search from "../components/search.vue";
@Component({
  components: {
    search
  }
})
export default class Home extends Vue {}
</script>
