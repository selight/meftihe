<template>
  <v-container fluid>
    <v-autocomplete
      prepend-inner-icon="mdi-magnify"
      solo-inverted
      rounded
      color="yellow"
      :items="recentSearch"
      :search-input.sync="search"
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              No results matching {{ search }}.
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-autocomplete>
  </v-container>
  <!--    <v-text-field-->
  <!--      prepend-inner-icon="mdi-magnify"-->
  <!--      style="border-radius: 50px; border: solid #fcfa7f 2px;"-->
  <!--      solo-->
  <!--      flat-->
  <!--      hide-details-->
  <!--      @focus="isSearching = true"-->
  <!--      @blur="isSearching = false"-->
  <!--      v-bind:class="isSearching ? 'search-top' : 'search-center'"-->
  <!--    ></v-text-field>-->
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      isActive: true,
      isSearching: false,
      name: "vue-js",
      recentSearch: ["hello", "seliye", "how are you"]
    };
  },
  methods: {}
};
</script>

<style scoped></style>
