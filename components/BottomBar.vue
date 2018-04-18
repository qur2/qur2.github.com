<template>
  <footer class="bottom-bar">
    <div>
      Content and photos © 2018 Aurélien Scoubeau.<br>
      Reproduction of any piece of this website, including text or photos, is not permitted without prior written consent.<br>
      Built with <a href="http://vuejs.org/">vue.js</a>
      <em>{{ gitHead }}</em>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    gitHead() {
      return process.GIT_HEAD
    }
    // version() {
    //   return process.version
    // }
  }
}
</script>

<style lang="postcss">
footer.bottom-bar {
  position: relative;
  text-align: center;
  background: black;
  color: rgb(240, 242, 244);
  padding: 1.5em 1em;
  margin-top: 1em;
  font-size: 0.8em;
  display: flex;
  justify-content: center;

  div {
    opacity: 0.75;
  }

  a {
    color: white;
  }

  em {
    position: absolute;
    right: 1em;
    bottom: 1em;
    opacity: 0.75;
    font-size: 0.6em;
    display: flex;
    font-style: normal;
  }
}
</style>
