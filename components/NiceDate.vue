<template>
  <div class="nice-date">
    <div v-if="!noDay">{{day}}</div>
    <div v-if="!noMonth">{{month}}</div>
    <div v-if="!noYear">{{year}}</div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    noYear: {
      type: Boolean,
    },
    noMonth: {
      type: Boolean,
    },
    noDay: {
      type: Boolean,
    },
  },
  data () {
    return {
      dateInstance: new Date(this.date),
    }
  },
  computed: {
    day () {
      return format(this.dateInstance, 'DD')
    },
    month () {
      return format(this.dateInstance, 'MMM')
    },
    year () {
      return format(this.dateInstance, 'YYYY')
    },
  },
}
</script>

<style lang="postcss">
.nice-date {
  display: inline-block;
  text-align: center;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;

  & div:first-child {
    opacity: .7;
    font-size: 1.70rem;
    line-height: .80;
  }
  & div:nth-child(2) {
    opacity: .9;
    font-size: 1rem;
  }
  & div:nth-child(3) {
    opacity: .8;
    font-size: .75rem;
  }
}
</style>
