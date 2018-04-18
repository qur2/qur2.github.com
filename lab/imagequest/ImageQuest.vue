<template>
  <div
    class="imagequest"
    tabIndex="-1"
    @keyup.left="previousRect()"
    @keyup.right="nextRect()"
  >
    <svg
      v-if="rects"
      :viewBox="viewBox"
      :width="width"
      :height="height"
      class="imagequest-hud"
    >
      <template v-for="(rect, i) in rects">
        <rect
          :key="i"
          :x="rect.x || 0"
          :y="rect.y || 0"
          :width="rect.width"
          :height="rect.height"
          :class="{active: i === currentRect}"
          stroke="none"
          @click="showRect(i)"
        />
      </template>
    </svg>
    <svg
      :viewBox="viewBox"
      class="imagequest-img"
    >
      <g
        :style="{transform: transform}"
        name="figure"
      >
        <slot name="figure">Insert image here.</slot>
      </g>
    </svg>
  </div>
</template>

<script>
const filterTagNodes = nodes =>
  nodes.reduce((acc, node) => (node.tag ? acc.concat(node) : acc), [])

export default {
  props: {
    viewBox: { required: true, type: String },
    width: { default: 100, type: Number },
    height: { default: 100, type: Number }
  },
  data: () => ({
    rects: [],
    currentRect: -1,
    transform: false
  }),
  beforeMount: function() {
    this.rects = filterTagNodes(this.$slots.zones[0].children).map(
      node => node.data.attrs
    )
  },
  methods: {
    showRect(i) {
      this.currentRect = i
      this.zoom(this.rects[i])
    },
    zoom(r) {
      const svgRect = this.viewBox.split(" ").map(Number)
      const scale = Math.min(svgRect[2] / r.width, svgRect[3] / r.height)
      const pw = scale * r.width
      const ph = scale * r.height
      const dx = -(r.x || 0) * scale + (svgRect[2] - pw) / 2
      const dy = -(r.y || 0) * scale + (svgRect[3] - ph) / 2
      const t = [`translate(${dx}px,${dy}px)`, `scale(${scale})`]
      this.transform = t.join(" ")
    },
    nextRect() {
      this.showRect((this.currentRect + 1) % this.rects.length)
    },
    previousRect() {
      this.showRect(
        (this.currentRect + this.rects.length - 1) % this.rects.length
      )
    }
  }
}
</script>

<style>
.imagequest {
  position: relative;
}

.imagequest svg [name="figure"] {
  transition: width 0.5s, height 0.5s, transform 0.5s;
  transform-origin: 0 0;
}

.imagequest-hud {
  position: absolute;
  width: 12%;
  height: auto;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 10;
}

.imagequest-hud rect {
  cursor: pointer;
  fill: rgba(33, 33, 33, 0.3);
}
.imagequest-hud rect.active {
  fill: rgba(33, 33, 33, 0.7);
}
</style>
