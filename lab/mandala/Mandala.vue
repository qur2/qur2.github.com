<template>
  <div
    :style="{width: width+'px', height: height+'px'}"
    class="mandala"
  >
    <svg
      :viewBox="viewBox"
      :width="width"
      :height="height"
    >
      <g
        fill="none"
        stroke="black"
        stroke-width="1px"
      >
        <template v-for="zone in zones">
          <g
            :key="zone"
            :transform="zone"
          >
            <line
              :x2="width"
              y2="0"
              x1="0"
              y1="0"
              stroke="purple"
            />
            <template v-for="curve in curves">
              <path
                :key="curve"
                :d="curve"
              />
            </template>
            <path
              :d="theCurve"
              stroke="olive"
            />
          </g>
        </template>
      </g>
    </svg>
    <div
      ref="canvas"
      class="touchpad"
      @mousemove="draw"
      @mousedown="startDrawing"
      @mouseup="stopDrawing"
    />
  </div>
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
      drawing: false,
      canvas: null,
      theLine: [],
      lines: [
        [
          [0.0, 10.0],
          [5.5, 35.0],
          [34.0, 7.0],
          [36.5, 8.0],
          [59.0, 41.5],
          [62.5, 38.0],
          [66.5, 12.0]
        ]
      ]
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
    }
  },
  mounted() {
    // moving / resizing the element should trigger a refresh of this
    const {
      width,
      height,
      top,
      left,
      bottom,
      right
    } = this.$refs.canvas.getBoundingClientRect()
    this.canvas = { width, height, top, left, bottom, right }
  },
  methods: {
    startDrawing() {
      this.drawing = true
    },
    draw(evt) {
      if (this.drawing) {
        this.theLine.push(this.getMousePos(evt))
      }
    },
    stopDrawing() {
      this.drawing = false
      if (this.theLine && this.theLine.length) {
        // This is cheap way to make lines smoother
        this.lines.push(this.theLine.filter((p, i) => !(i % 5)))
      }
      this.theLine = []
    },
    getMousePos(evt) {
      const x = Math.floor(
        (evt.clientX - this.canvas.left) / this.canvas.width * this.canvas.width
      )
      const y = Math.floor(
        (evt.clientY - this.canvas.top) /
          this.canvas.height *
          this.canvas.height
      )
      return [x, y]
    }
  }
}
</script>

<style lang="postcss">
.mandala {
  position: relative;

  & .touchpad {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  & svg {
    width: 100%;
  }
}
</style>
