<template>
  <div
    class="search"
  >
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      style="border-radius: 50px; border: solid #fcfa7f 2px;"
      solo
      flat
      hide-details
      @focus="isSearching = true"
      @blur="isSearching = false"
      v-bind:class="isSearching ? 'search-top' : 'search-center'"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      isActive: true,
      isSearching: false,
      name: "vue-js"
    };
  },
  methods: {
    toggleClass: function() {
      this.isActive = !this.isActive;
    },
    searchClass: function() {
      this.isSearching = !this.isSearching;
    }
  }
};
</script>

<style scoped>
.search-top {
  top: 5%;
  left: 50%;
  margin: 0 -50% 0 0;
  transform: translate(-50%, -50%);
  position: absolute;
}
.search-center {
  position: absolute;
  top: 40%;
  left: 50%;
  margin: 0 -50% 0 0;
  transform: translate(-50%, -50%)
}
</style>
