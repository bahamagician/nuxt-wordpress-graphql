<template>
    <div>
        Whaps
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <p v-html="page.content"></p>
        </div>
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
      update(data) {
        return data.pageBy;
      }
    }


  }
}
</script>
