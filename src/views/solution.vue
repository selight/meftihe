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
              <h2>This is a title is a title is a title</h2>
            </div>
          </v-row>
          <v-row class="mt-4">
            <div>
              <h2>Problem</h2>
              <p
                class="mt-2"
                style="background: #fffff0; border:solid #fce900; border-radius: 5px; padding: 15px"
              >
                This is a problem a problem is a problem a problem is a problem
                a problem is a problem a problem is a problem a problem is a
                problem a problem is a problem a problem This is a problem a
                problem is a problem a problem is a problem a problem is a
                problem a problem is a problem a problem is a problem a problem
                is a problem a problem
              </p>
            </div>
          </v-row>
          <v-row class="mt-4">
            <div>
              <h2>Solution</h2>
              <p
                class="mt-2"
                style="background: #fffff0; border:solid #26fc09; border-radius: 5px; padding: 15px"
              >
                This is a solution to the problem, is a solution to the problem
                is a solution to the problem is a solution to the problem is a
                solution to the problem is a solution to the problem
              </p>
            </div>
          </v-row>
          <v-row class="mt-4">
            <div>
              <h4>Posted by</h4>
              <p
                class="mt-2"
                style="background: #82887e; border-radius: 5px; padding: 15px"
              >
                Loremipsum@gmail.com
              </p>
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

<style scoped></style>
