<template>
  <section class="content">
    <Toc
      :meta="toc"
      base-url="blog/"
    />
  </section>
</template>

<script>
import Toc from "~/components/Toc"
import toc from "~/toc"

export default {
  components: {
    Toc
  },
  computed: {
    toc() {
      return toc
    }
  }
}
</script>
