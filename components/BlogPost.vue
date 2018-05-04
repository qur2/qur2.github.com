<template>
  <div class="blogpost">
    <div
      :style="{background: fm.cover ? `no-repeat center/cover url(${fm.cover})` : undefined}"
      class="blogpost-cover" 
    >
      <div class="blogpost-overlay">
        <h1>{{ fm.title }}</h1>
        <h3>{{ fm.description }}</h3>
        <sub>{{ fm.author }}</sub>
        <sub>{{ niceDate }}</sub>
        <image-credit
          v-if="fm.cover_credit"
          :credit="fm.cover_credit"
          class="cover-caption"
        />
      </div>
    </div>
    <slot name="content" />
  </div>
</template>

<script>
import format from "date-fns/format"
import toc from "~/toc"
import ImageCredit from "~/components/ImageCredit"

export default {
  components: {
    ImageCredit
  },
  props: {
    slug: {
      type: String,
      default: () => null
    }
  },
  computed: {
    fm() {
      return toc[this.slug]
    },
    niceDate() {
      return format(this.fm.date, "DD/MM/YYYY")
    }
  }
}
</script>

<style lang="stylus">
.blogpost-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  position: relative;
  color: white;
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
.cover-caption {
  position: absolute;
  right: 1em;
  bottom: 1em;
  font-size: .75em;
}
.blogpost > :not(:first-child) {
  max-width: 44em;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1em;
}
</style>
