<template>
  <v-img src="../assets/back.jpeg" min-height="100%">
    <v-container>
      <v-fab-transition>
        <v-btn
          color="#fcca14"
          dark
          absolute
          bottom
          right
          class="mb-12"
          fab
          v-on:click="$router.push('/problem')"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-btn v-on:click="logOut">logout</v-btn>
      <v-row>
        <v-col class="mt-n3 mb-n3">
          <search />
        </v-col>
      </v-row>
      <div style="text-align: center">
        <H4 style="color: #000000; text-shadow: 1px 1px 5px gray;"
          >Get solutions for all your problems at MEFTIHE!</H4
        >
      </div>
      <card />
    </v-container>
  </v-img>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import search from "../components/search.vue";
import card from "../components/card.vue";
export default Vue.extend({
  name: "App",
  components: {
    search,
    card
  },
  data: () => ({
    user: null
  }),
  created(): void {
    this.user = this.$store.state.user.displayName;
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut").then(() => {
        this.$router.push("/login");
      });
    }
  }
});
</script>
