<template>
  <div class="layout-default">
    <top-bar/>
    <nuxt/>
    <bottom-bar/>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar"
import BottomBar from "~/components/BottomBar"
// import Sticky from '~/components/Sticky'

export default {
  components: {
    TopBar,
    BottomBar
    // Sticky,
  }
}
</script>

<style lang="stylus">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.layout-default {
  box-sizing: border-box;
  padding-top: 3rem;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > *:nth-child(2) {
    flex: 1;
  }

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
