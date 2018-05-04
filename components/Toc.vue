<template>
  <div class="toc">
    <template v-for="m in meta">
      <toc-entry
        :key="m.baseName"
        :meta="m"
        @click.native="$router.push({path: `${baseUrl}${m.baseName}`})"
      />
    </template>
  </div>
</template>

<script>
import toc from "~/toc"
import TocEntry from "./TocEntry"

export default {
  components: {
    TocEntry
  },
  props: {
    meta: {
      type: Object,
      default: () => ({})
    },
    baseUrl: {
      type: String,
      default: () => ""
    }
  }
}
</script>

<style lang="stylus">
.toc {
  display: flex;
  // align-items: flex-start;
  // justify-content: space-around;
  flex-wrap: wrap;
}
</style>
