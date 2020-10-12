<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
          <v-card v-if="$store.state.searchResults.length===0"   color="#ddbe8e"><v-card-title>No search results</v-card-title></v-card>
        <v-card
          color="#ddbe8e"
          v-for="(problem, i) in this.$store.state.searchResults"
          :key="i"
          class="mb-1"
          v-on:click="getOne(problem)"
        >
          <v-card-title class="headline">
            {{ problem.title }}
          </v-card-title>
          <v-card-subtitle>{{ problem.description }}</v-card-subtitle>
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

    getOne(problem) {
      this.$store.state.id = problem._id?problem._id:problem.objectID;
      this.$router.push("/sol");
    }
  }
};
</script>

<style scoped></style>
