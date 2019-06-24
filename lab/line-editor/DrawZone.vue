<template>
  <svg
    ref="svg"
    :viewBox="viewBox"
    :width="width"
    :height="height"
  >
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      @mousemove="draw"
      @mousedown="startDrawing"
      @mouseup="stopDrawing"
    />
  </svg>
</template>

<script>
import { line, curveCardinal } from "d3-shape"

export default {
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pt: null,
      drawing: false,
      buffer: []
    }
  },
  computed: {
    viewBox() {
      const { height, width } = this
      return [0, 0, width, height].join(" ")
    },
    curves() {
      const draw = line().curve(curveCardinal.tension(0.1))
      return this.lines.map(draw)
    },
    theCurve() {
      const draw = line().curve(curveCardinal.tension(0.1))
      return draw(this.buffer)
    }
  },
  mounted() {
    // Create an SVGPoint for future math
    this.pt = this.$refs.svg.createSVGPoint()
  },
  methods: {
    // @see https://stackoverflow.com/a/10298843
    cursorPoint(evt) {
      // Get point in global SVG space
      const { pt } = this
      const { svg } = this.$refs
      pt.x = evt.clientX
      pt.y = evt.clientY
      return pt.matrixTransform(svg.getScreenCTM().inverse())
    },
    startDrawing() {
      this.drawing = true
      this.$emit("drawStart")
    },
    draw(evt) {
      if (this.drawing) {
        const pt = this.cursorPoint(evt)
        this.buffer.push([pt.x, pt.y])
        this.$emit("draw", this.buffer)
      }
    },
    stopDrawing() {
      this.drawing = false
      if (this.buffer.length) {
        this.$emit("drawEnd", this.buffer)
        this.buffer = []
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
