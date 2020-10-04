<template>
  <v-container fluid>
    <v-combobox
      prepend-inner-icon="mdi-magnify"
      solo-inverted
      rounded
      color="yellow"
      :items="recentSearch"
      v-model="input"
      v-on:keyup.enter="addtorecent(input)"
      v-on:change="addtorecent(input)"
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
    addtorecent(input) {
      this.$store.dispatch("addToRecentSearches", input);
      this.$store.dispatch("search", input);
      console.log("DS",this.$store.state.searchResults);
      console.log("dsd",this.$store.state.problems);

    }
  }
};
</script>

<style scoped></style>
