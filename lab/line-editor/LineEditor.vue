<template>
  <div class="editor">
    <div class="editor-drawzone">
      <DrawZone
        :width="500"
        :height="500"
        :style="{fill:'white', border: '1px black solid'}"
        @draw="onDraw"
        @drawEnd="onDrawEnd"
      />
      <svg
        :width="500"
        :height="500"
        :style="{'pointer-events': 'none'}"
        viewBox="0 0 500 500"
      >
        <template v-for="(curve, i) in curves">
          <path
            :key="curve"
            :d="curve"
            :stroke="selected === i ? 'red' : highlight === i ? 'blue' : 'black'"
            fill="none"
          />
        </template>
        <path
          :d="newCurve"
          fill="none"
          stroke="grey"
        />
      </svg>
    </div>

    <LineStack
      :curves="curves"
      :boxes="boxes"
      @enter="highlightOn"
      @out="highlightOff"
      @select="selectCurve"
    />
  </div>
</template>

<script>
import DrawZone from "~/lab/line-editor/DrawZone.vue"
import LineStack from "~/lab/line-editor/LineStack.vue"
import { line, curveCardinal } from "d3-shape"

const computeBoundaries = points => {
  let xmin = Infinity,
    xmax = -Infinity,
    ymin = Infinity,
    ymax = -Infinity
  for (const [x, y] of points) {
    if (xmin > x) xmin = x
    if (xmax < x) xmax = x
    if (ymin > y) ymin = y
    if (ymax < y) ymax = y
  }
  // TODO handle to small areas by sending back a minimum (like around a single point)
  return [[xmin - 5, ymin - 5], [xmax - xmin + 10, ymax - ymin + 10]]
}

export default {
  components: {
    LineStack,
    DrawZone
  },
  data() {
    return {
      newLine: [],
      lines: [],
      boxes: [],
      highlight: -1,
      selected: -1
    }
  },
  computed: {
    curves() {
      const draw = line().curve(curveCardinal.tension(0.1))
      return this.lines.map(draw)
    },
    newCurve() {
      const draw = line().curve(curveCardinal.tension(0.1))
      return draw(this.newLine)
    }
  },
  methods: {
    onDraw(line) {
      this.newLine = line
    },
    onDrawEnd(line) {
      this.lines.push(line)
      this.newLine = []
      this.boxes.push(computeBoundaries(line))
    },
    highlightOn(index) {
      this.highlight = index
    },
    highlightOff(index) {
      if (this.highlight === index) {
        this.highlight = -1
      }
    },
    selectCurve(index) {
      // unselect when pressing esc
      this.selected = index
    }
  }
}
</script>

<style lang="stylus">
.editor {
  display: flex;
}

.editor-drawzone {
  position: relative;
  flex: 1 0 auto;

  > svg:not(:first-child) {
    position: absolute;
    left: 0;
    top: 0;
  }
}

.editor-linestack {
  justify-self: flex-end;
  border: 1px solid black;

  > svg {
    display: block;
    border: 1px solid black;
  }
}
</style>
