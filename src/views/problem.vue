<template
  ><v-container>
    <v-row class="mt-n3">
      <v-toolbar dense>
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
            v-model="req"
            :rules="[rules.req]"
            outlined
            label="Title"
            auto-grow
            rows="1"
            row-height="30"
          ></v-textarea>
        </v-row>
        <v-row>
          <v-textarea
            v-model="requ"
            :rules="[rules.requ]"
            outlined
            label="Problem"
            auto-grow
            rows="4"
            row-height="30"
          ></v-textarea>
        </v-row>
        <v-row>
          <v-textarea
            v-model="requi"
            :rules="[rules.requi]"
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
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    req: undefined,
    requ: undefined,
    requi: undefined,
    form: false,
    isLoading: false,
    rules: {
      req: v => !!v || "This field is required",
      requ: v => !!v || "This field is required",
      requi: v => !!v || "This field is required"
    }
  })
};
</script>
