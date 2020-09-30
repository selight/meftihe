<template>
  <v-img src="../assets/back.jpeg" min-height="100%">
    <div class="home">
      <search />
      <p>Hey lov {{ user }}</p>
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
import { Vue } from "vue-property-decorator";
import search from "../components/search.vue";
export default Vue.extend({
  name: "App",

  components: {
    search
  },
  data: () => ({
    user: null
  }),
  created(): void {
 this.user=this.$store.state.user.displayName
  }
});
</script>
