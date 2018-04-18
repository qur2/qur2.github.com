<template>
  <div class="blogpost">
    <div
      :style="{background: fm.cover ? `no-repeat center/cover url(${fm.cover})` : undefined}"
      class="blogpost-cover" 
    >
      <div class="blogpost-overlay">
        <h1>{{ fm.title }}</h1>
        <h2>{{ fm.description }}</h2>
        <sub>{{ fm.author }}</sub>
        <sub>{{ niceDate }}</sub>
      </div>
    </div>
    <slot name="content" />
  </div>
</template>

<script>
import format from "date-fns/format"
// import "github-markdown-css/github-markdown.css"
// import "highlight.js/styles/gruvbox-dark.css"
import toc from "~/toc"
export default {
  props: {
    slug: {
      type: String,
      default: () => null
    }
  },
  computed: {
    fm() {
      console.log(toc, this.slug, toc[this.slug])
      return toc[this.slug]
    },
    niceDate() {
      return format(this.fm.date, "MM/DD/YYYY")
    }
  }
}
</script>

<style lang="postcss">
.blogpost-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  position: relative;
  color: white;
  margin-bottom: 1.5em;
}
.blogpost-overlay {
  width: 100%;
  padding: 10em 3em;
  background-color: rgba(#000, 0.5);
  text-align: center;

  > sub {
    display: block;
    position: relative;
    height: 2em;
    line-height: 2em;
  }
}
.blogpost > :not(:first-child) {
  max-width: 44em;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1em;
}
</style>
