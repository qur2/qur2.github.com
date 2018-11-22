<template>
  <svg
    ref="svg"
    :viewBox="viewBox"
    :width="width"
    :height="height"
    class="mandala"
  >
    <g
      fill="none"
      stroke-width="1px"
    >
      <template v-for="c in circles">
        <circle
          :key="c"
          :r="c"
          x="0"
          y="0"
          class="guide"
        />
      </template>
      <template v-for="zone in zones">
        <g
          :key="zone"
          :transform="zone"
        >
          <line
            :x2="width / 2"
            y2="0"
            x1="0"
            y1="0"
            class="guide"
          />
          <template v-for="curve in curves">
            <path
              :key="curve"
              :d="curve"
              stroke="black"
            />
          </template>
          <path
            :d="theCurve"
            stroke="olive"
          />
        </g>
      </template>
    </g>
    <rect
      x="0"
      y="0"
      width="50%"
      height="50%"
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
    },
    segments: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      pt: null,
      drawing: false,
      theLine: [],
      lines: []
    }
  },
  computed: {
    viewBox() {
      const { height, width } = this
      return [-width / 2, -height / 2, width, height].join(" ")
    },
    curves() {
      const draw = line().curve(curveCardinal.tension(0.1))
      return this.lines.map(draw)
    },
    theCurve() {
      const draw = line().curve(curveCardinal.tension(0.1))
      return draw(this.theLine)
    },
    zones() {
      return Array.from(
        new Array(this.segments),
        (_, index) => `rotate(${index * 360 / this.segments})`
      )
    },
    circles() {
      return Array.from(new Array(10), (_, index) => (index + 1) * 25)
    }
  },
  mounted() {
    // moving / resizing the element should trigger a refresh of this
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
    },
    draw(evt) {
      if (this.drawing) {
        const pt = this.cursorPoint(evt)
        this.theLine.push([pt.x, pt.y])
      }
    },
    stopDrawing() {
      this.drawing = false
      if (this.theLine && this.theLine.length) {
        // This is cheap way to make lines smoother
        this.lines.push(this.theLine.filter((p, i) => !(i % 5)))
      }
      this.theLine = []
    }
  }
}
</script>

<style lang="stylus">
.mandala {
  width: 100%;

  & rect:last-child {
    fill: rgba(0, 0, 0, 0.2);
  }

  & .guide {
    stroke: rgba(#000, 0.25);
  }
}
</style>
