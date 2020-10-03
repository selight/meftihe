<template>
  <v-container fluid>
    <v-combobox
      prepend-inner-icon="mdi-magnify"
      solo-inverted
      rounded
      color="yellow"
      :items="recentSearch"
      :search-input.sync="search"
      v-model="input"
      v-on:keyup.enter="addtorecent(input)"
    >
    </v-combobox>
    {{ this.input }}
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
    }
  }
};
</script>

<style scoped></style>
