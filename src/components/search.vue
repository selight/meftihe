<template>
  <v-container fluid>
    <v-combobox
      prepend-inner-icon="mdi-magnify"
      solo-inverted
      rounded
      color="yellow"
      :items="recentSearch"
      v-model="input"
      v-on:change="addToRecent(input)"
    >
    </v-combobox>
  </v-container>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      input: "",
      recentSearch: this.$store.state.recentSearches
    };
  },
  methods: {
    addToRecent(input) {
      this.$store.dispatch("addToRecentSearches", input);
      this.$store.dispatch("search", input);
    }
  }
};
</script>

<style scoped></style>
