<template>
  <v-img src="../assets/vec.jpg" min-height="100%">
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
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <div align="right">
            <v-icon v-bind="attrs" v-on="on">mdi-logout</v-icon>
          </div>
        </template>
        <v-card>
          <v-card-title class="headline">
            Meftihe
          </v-card-title>
          <v-card-text>Are you sure you want to log out?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              No
            </v-btn>
            <v-btn v-on:click="logOut" color="green darken-1" text>
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-row class="mb-n5">
        <v-col class="mt-n3 mb-n3">
          <search />
        </v-col>
      </v-row>
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
    user: null,
    dialog: false
  }),
  created(): void {
    this.user = this.$store.state.user.displayName;
  },
  methods: {
    logOut() {
      this.dialog = false;
      this.$store.dispatch("logOut").then(() => {
        this.$router.push("/login");
      });
    }
  }
});
</script>
