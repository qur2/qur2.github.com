<template>
  <blog-post :slug="$route.params.slug">
    <template
      slot="content"
      :is="md"
    />
  </blog-post>
</template>

<script>
import BlogPost from "~/components/BlogPost"

export default {
  components: {
    BlogPost
  },
  asyncData({ route: { params } }) {
    console.log(params)
    return import(`~/blog/${params.slug}.md`).then(() => ({ mdReady: true }))
  },
  data() {
    return {
      md: null
    }
  },
  mounted() {
    const { slug } = this.$route.params
    import(`~/blog/${slug}.md`).then(md => {
      this.md = md.default
    })
  }
}
</script>
