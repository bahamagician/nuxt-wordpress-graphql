
<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text v-for="blog in blogs" :key="blog.id">
          <p>{{ blog.title }}</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import gql from "graphql-tag";

export default {
  apollo: {
    blogs: gql`{
        blogs {
          id
          title
          body
        }
      }`
  }
};
</script>