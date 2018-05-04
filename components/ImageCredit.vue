<template>
  <figcaption>
    Image by
    <a
      v-if="credit.by_url"
      :href="credit.by_url"
      _target="blank"
    >
      {{ credit.by }}
    </a>
    <span v-else>
      {{ credit.by }}
    </span>
    via
    <a
      :href="credit.via_url"
      _target="blank"
    >
      {{ credit.via }}
    </a>
  </figcaption>
</template>

<script>
export default {
  props: {
    credit: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
figcaption {
  text-align: right;
}
</style>
