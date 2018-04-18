<template>
  <div class="topbar">
    <template v-for="item in items">
      <nuxt-link
        :key="item.path"
        :to="item.path"
        exact
      >
        {{ item.label }}
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          path: "/resume",
          label: "Resume"
        },
        {
          path: "/",
          label: "Home"
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
.topbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  height: 3rem;

  img {
    width: 2.5rem;
  }

  a {
    text-align: center;
    transition: opacity 0.25s ease-in-out;
    color: black;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    transition: border-color 150ms;
    padding: 0 0.2em;
  }

  a:not(.nuxt-link-active) {
    opacity: 0.6;
    filter: grayscale(100%);
  }

  a.nuxt-link-active,
  a:hover {
    border-color: orange;
  }
}
</style>
