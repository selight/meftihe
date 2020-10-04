<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card
          color="#ddbe8e"
          v-for="(problem, i) in this.$store.state.searchResults"
          :key="i"
          class="mb-1"
          v-on:click="getOne(problem.id)"
        >
          <v-card-title class="headline">
            {{ problem.title }}
          </v-card-title>
          <v-card-subtitle>{{ problem.description }}</v-card-subtitle>
          <v-card-actions v-if="user(problem.email)"
            ><v-spacer></v-spacer
            ><v-btn text v-on:click="edit(problem.id)"
              >edit</v-btn
            ></v-card-actions
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "card",
  data: function() {
    return {
      problems: {}
    };
  },
  created() {
    this.$store.dispatch("getAll");
  },
  methods: {
    user(email) {
      return this.$store.state.user.email === email;
    },
    edit(id) {
      this.$store.state.id = id;
      this.$router.replace("/problem");
    },
    getOne(id) {
      this.$store.state.id = id;
      this.$router.push("/sol");
    }
  }
};
</script>

<style scoped></style>
