<template>
    <div>
        <h1>{{ page.title }}</h1>
        <div v-html="page.content"></div>
    </div>
</template>
<script>
import page from "~/apollo/queries/page.gql"
export default {
    data () {
        return {
            page: '',
            routeParam: this.$route.params.slug
        }
},
apollo: {
    page: {
      query: page,
    //   prefetch: true,
      variables() {
        return {
            page: this.routeParam
        }
      },
      prefetch: ({ route }) => {
        return {
          page: route.params.slug,
        }
      },
      update(data) {
        return data.pageBy;
      }
    }


  }
}
</script>
