<template>
  <v-img src="../assets/vec.jpg" min-height="100%">
    <v-container>
      <v-row class="mt-n3">
        <v-toolbar dense style="background: #fcca14">
          <v-btn icon v-on:click="$router.push('/home')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title>Solution page</v-toolbar-title>
        </v-toolbar>
      </v-row>
      <v-col>
        <v-item-group>
          <v-row class="mt-4">
            <div>
              <v-container class="display-1" v-model="title">{{
                title
              }}</v-container>
            </div>
          </v-row>
          <v-row class="mt-4">
            <div>
              <h2>Problem</h2>
              <v-container
                class="mt-2"
                style="background: #fffff0; border:solid #fce900; border-radius: 5px; padding: 15px"
                v-model="description"
              >
                {{ description }}
              </v-container>
            </div>
          </v-row>
          <v-row class="mt-4">
            <div>
              <h2>Solution</h2>
              <v-container
                class="mt-2"
                style="background: #fffff0; border:solid #26fc09; border-radius: 5px; padding: 15px"
                v-model="solution"
              >
                {{ solution }}
              </v-container>
            </div>
          </v-row>
          <v-row class="mt-4">
            <div>
              <h4>Posted by</h4>
              <v-container
                class="mt-2"
                style="background: #82887e; border-radius: 5px; padding: 15px"
                v-model="email"
              >
                {{ email }}
              </v-container>
              <v-spacer></v-spacer>
              <v-btn text v-if="edit" v-on:click="editMethod">edit</v-btn>
            </div>
          </v-row>
        </v-item-group>
      </v-col>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "solution",
  data: () => ({
    id: null,
    title: null,
    description: null,
    solution: null,
    email: null,
    edit: false
  }),
  mounted() {
    this.id = this.$store.state.id;
    if (this.$store.state.id !== null) {
      this.$store.dispatch("getOne", this.$store.state.id).then(response => {
        this.title = response.data.title;
        this.description = response.data.description;
        this.solution = response.data.solution;
        this.email = response.data.email;
        if (this.$store.state.user.email === response.data.email) {
          this.edit = true;
        }
      });
    }
  },
  methods: {
    editMethod() {
      this.$store.state.id = this.id;
      this.$router.replace("/problem");
    }
  }
};
</script>

<style scoped></style>
