<template>
  <div
    class=".search_bar"
    style="
    position: absolute;
    top: 40%;
    left: 50%;
    margin: 0 -50% 0 0;
    transform: translate(-50%, -50%)"
  >
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      style="border-radius: 50px; border: solid #fcfa7f 2px;"
      solo
      flat
      hide-details
    ></v-text-field>
  </div>
</template>

<script>

export default {
  name: "home"
};
</script>

<style scoped></style>
