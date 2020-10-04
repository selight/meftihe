<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card
          color="rgba(252,218,54,0.6)"
          v-for="item in items"
          :key="item.title"
        >
          <v-card-title class="headline">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>{{ item.description }}</v-card-subtitle>
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
      items: [
        { title: "Barrr", description: "Foo" },
        { title: "Barrr", description: "Foo" },
        { title: "Barrr", description: "Foo" },
        { title: "Barrr", description: "Foo" },
        { title: "Barrr", description: "Foo" },
        { title: "Barrr", description: "Foo" },
        { title: "Barrr", description: "Foo" },
        { title: "Barrr", description: "Foo" }
      ]
    };
  }
};
</script>

<style scoped></style>
