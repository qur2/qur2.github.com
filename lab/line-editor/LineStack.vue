<template>
  <div class="editor-linestack">
    <template v-for="(curve, i) in curves">
      <svg
        :key="curve"
        :width="100"
        :height="100"
        :viewBox="`${boxes[i][0][0]} ${boxes[i][0][1]} ${boxes[i][1][0]} ${boxes[i][1][1]}`"
        @mouseenter.capture="$emit('enter', i)"
        @mouseout.capture="$emit('out', i)"
        @click.capture="$emit('select', i)"
      >
        <path
          :d="curve"
          stroke="black"
          fill="none"
        />
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    curves: { type: Array, default: () => [] },
    // Should boxes be a computed prop in here ?
    boxes: { type: Array, default: () => [] }
  }
}
</script>
