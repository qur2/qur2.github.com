<script>
const cloneVNode = vnode => {
  // https://github.com/vuejs/vue/blob/v2.3.4/src/core/vdom/vnode.js#L74
  var cloned = new vnode.constructor(
    vnode.tag,
    vnode.data,
    vnode.text,
    vnode.children,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  )
  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.isCloned = true
  return cloned
}

const cloneVNodeWithStyle = (style, vnode) => {
  var cloned = cloneVNode(vnode)
  cloned.data = Object.assign(cloned.data || {}, { style: style })
  return cloned
}

// const setStyle = (style, data) => {
//   return Object.assign(data || {}, { style: style })
// }

// const setVNodeStyle = (style, vnode) => {
//   vnode.data = Object.assign(vnode.data || {}, { style: style })
//   return vnode
// }

// // allows to sticky text nodes
// const ensureTag = (h, vnode) => {
//   if (vnode.tag) return vnode
//   return h('span', vnode.text)
// }

const computePos = el => {
  var rect = el.getBoundingClientRect()
  return {
    top: rect.top + window.scrollY || window.pageYOffset,
    left: rect.left,
    right: rect.right - rect.width,
    height: rect.height
  }
}

// const cloneAndHide = cloneVNodeWithStyle.bind(null, { visibility: 'hidden' })

export default {
  data() {
    return {
      isSticky: false,
      pos: {}
    }
  },
  computed: {
    stickyStyle() {
      return !this.isSticky
        ? {}
        : {
            position: "fixed",
            ...this.getRelativePos()
          }
    },
    placeholderStyle() {
      return !this.isSticky
        ? {}
        : {
            visibility: "hidden",
            ...this.getDimension()
          }
    }
  },
  mounted() {
    this.pos = computePos(this.$el)
    window.addEventListener("scroll", this.updateSticky)
  },

  // at the moment ignore updated hook, because most likely, the top offset would remain unchanged
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateSticky)
  },
  methods: {
    pastScrollY() {
      return this.pos.top < (window.scrollY || window.pageYOffset)
    },
    getRelativePos() {
      return {
        left: this.pos.left + "px",
        right: this.pos.right + "px",
        top: 0
      }
    },
    getDimension() {
      return {
        height: this.pos.height + "px"
      }
    },
    updateSticky() {
      this.isSticky = this.pastScrollY()
    }
  },
  render(h) {
    var placeholder = this.isSticky
      ? [h("div", { style: this.placeholderStyle })]
      : []
    // console.log(this.$slots.default.map(setVNodeStyle.bind(null, this.stickyStyle)))
    return h(
      "div",
      placeholder.concat(
        this.$slots.default.map(
          cloneVNodeWithStyle.bind(null, this.stickyStyle)
        )
      )
    )
  }
}
</script>
