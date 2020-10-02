<template>
  <v-container>
    <v-row class="mt-n3">
      <v-toolbar dense>
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>Solution page</v-toolbar-title>
      </v-toolbar>
    </v-row>

    <v-col>
      <v-row>
        <v-textarea
          readonly
          outlined
          label="Title"
          auto-grow
          rows="1"
          row-height="30"
        ></v-textarea>
      </v-row>
      <v-row>
        <v-textarea
          readonly
          outlined
          label="Problem"
          auto-grow
          rows="4"
          row-height="30"
        ></v-textarea>
      </v-row>
      <v-row>
        <v-textarea
          readonly
          outlined
          label="Solution"
          auto-grow
          rows="5"
          row-height="30"
        ></v-textarea>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "solution"
};
</script>

<style scoped></style>
