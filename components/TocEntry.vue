<template>
  <div class="toc-item">
    <nuxt-link :to="to">
      <img
        :src="meta.cover"
      >
    </nuxt-link>
    <nuxt-link
      :to="to"
      class="toc-item-details"
    >
      <h4>{{ meta.title }}</h4>
      <desc>{{ meta.description }}</desc>
      <strong>{{ date }}</strong>
      <!-- <strong>By {{meta.author}} ({{meta.lang.toUpperCase()}})</strong> -->
    </nuxt-link>

    <link
      href="https://fonts.googleapis.com/css?family=Domine|Open+Sans"
      rel="stylesheet"
    >
  </div>
</template>

<script>
import format from "date-fns/format"

export default {
  props: {
    meta: {
      type: Object,
      default: () => ({})
    },
    to: {
      type: String,
      default: () => ""
    }
  },
  computed: {
    date() {
      return format(this.meta.date, "D MMM YYYY")
    }
  }
}
</script>

<style lang="stylus">
.toc-item {
  // flex: 0 0 50%;
  width: calc(50% - 1em);
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 0px 1px 6px #ddd;
  margin: 0.5em;
  transition: opacity 0.1s linear;
  opacity: 0.9;

  h4 {
    font-family: 'Domine', serif;
    margin: 0px;
  }

  img {
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0px 2px 9px #ddd;
    opacity: 1;
  }
}

.toc-item-details {
  display: block;
  padding: 1em;
  color: #2C3E57;

  &:hover {
    text-decoration: none !important;
  }

  & em {
    font-style: normal;
    display: block;
    line-height: 1.5rem;
  }

  & strong {
    font-weight: 200;
    display: block;
    font-size: 0.75em;
    line-height: 1.5rem;
  }
}
</style>
