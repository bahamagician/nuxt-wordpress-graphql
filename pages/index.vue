
<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
        <v-card-title class="headline">Single Page App Template</v-card-title>
        <v-card-text v-for="item in menu" :key="item.id">
          <nuxt-link :to="`pages/${item.pageInfo.slug}`">{{ item.label }}</nuxt-link>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import gql from "graphql-tag";
import menu from "~/apollo/queries/menu.gql"
export default {
  data: () => {
    return {
      menu: '',
      title: 'Home'
    }
  },
  apollo: {
    menu: {
      query: menu,
      prefetch: true,
      update(data) {
        return data.topMenu.menu[0].items.item;
      }
    }

  },

  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
};
</script>