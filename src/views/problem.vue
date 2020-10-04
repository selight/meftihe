<template
  ><v-img src="../assets/vec.jpg" min-height="100%">
    <v-container>
      <v-row class="mt-n3">
        <v-toolbar dense style="background: #fcca14">
          <v-btn icon v-on:click="$router.push('/home')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title>Add problem</v-toolbar-title>
        </v-toolbar>
      </v-row>
      <v-form>
        <v-col ref="form" v-model="form" class="mt-4">
          <v-row>
            <v-textarea
              v-model="title"
              :rules="[rules.title]"
              outlined
              label="Title"
              auto-grow
              rows="1"
              row-height="30"
            ></v-textarea>
          </v-row>
          <v-row>
            <v-textarea
              v-model="description"
              :rules="[rules.description]"
              outlined
              label="Problem"
              auto-grow
              rows="4"
              row-height="30"
            ></v-textarea>
          </v-row>
          <v-row>
            <v-textarea
              v-model="solution"
              :rules="[rules.solution]"
              outlined
              label="Solution"
              auto-grow
              rows="5"
              row-height="30"
            ></v-textarea>
          </v-row>
        </v-col>
      </v-form>
      <v-card-actions
        ><v-btn text @click="$refs.form.reset()">
          Clear
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
          v-on:click="create"
          v-if="this.id === null"
        >
          Submit
        </v-btn>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
          v-on:click="update"
          v-if="this.id !== null"
        >
          update
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-img>
</template>
<script>
export default {
  data: () => ({
    title: undefined,
    description: undefined,
    solution: undefined,
    form: false,
    isLoading: false,
    rules: {
      title: v => !!v || "This field is required",
      description: v => !!v || "This field is required",
      solution: v => !!v || "This field is required"
    },
    id: null
  }),
  methods: {
    create() {
      this.$store.dispatch("create", {
        title: this.title,
        description: this.description,
        solution: this.solution,
        email: this.$store.state.user.email
      });
    },
    update() {
      this.$store.dispatch("edit", {
        title: this.title,
        description: this.description,
        solution: this.solution,
        email: this.$store.state.user.email
      });
      this.$router.push("/sol");
    }
  },
  created() {
    this.id = this.$store.state.id;
    if (this.$store.state.id !== null) {
      this.$store.dispatch("getOne", this.$store.state.id).then(response => {
        this.title = response.data.title;
        this.description = response.data.description;
        this.solution = response.data.solution;
        this.email = response.data.email;
      });
    }
  }
};
</script>
