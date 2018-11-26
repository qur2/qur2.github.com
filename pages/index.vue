<template>
  <section class="pop">
    <h1>Find my stuff scattered over the internet, in no particular order:</h1>
    <div id="threed">
      <ul>
        <li
          v-for="profile in resume.basics.profiles"
          :key="profile.url"
        >
          <a
            :href="profile.url"
            target="_blank"
          >
            <svg>
              <use
                :href="`${sprite}#${profile.network.toLowerCase()}`"
              />
            </svg>
            {{ profile.network }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <small>
        Camera icon made by
        <a
          href="https://www.freepik.com/"
          title="Freepik"
        >Freepik</a>
        from
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
        >www.flaticon.com</a>
        is licensed by
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >CC 3.0 BY</a>
      </small>
    </div>

    <link
      href="https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise"
      rel="stylesheet"
    >
  </section>
</template>

<script>
import resume from "../assets/resume.json"
import sprite from "../assets/social-icons.svg"

export default {
  head: {
    title: "Aurélien Scoubeau",
    bodyAttrs: {
      class: "paper"
    }
  },
  data() {
    return {
      resume,
      sprite
    }
  }
}
</script>

<style lang="stylus">
body.paper {
  background: url(../assets/bg-paper.png) repeat;
}
/* http://www.w3.org/Style/Examples/007/center.en.html#hv3 */
section.pop {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  font-size: 24px;
  font-family: "Waiting for the Sunrise", cursive;
  font-weight: 100;
  color: #444;
  text-align: center;

  h1 {
    display: block;
    padding: 0em 1.25em 1.5em;
    font-size: 2.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    text-align: center;
    position: relative;
  }
  li svg {
    display: block;
    font-size: 5.5rem;
    line-height: 2rem;
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
    /*border-radius: 50%;*/
    /*border: 1px solid #555;*/
    text-align: center;
    margin: auto;
  }
  li a {
    display: block;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    position: relative;
    font-size: 1.5rem;
    line-height: 3rem;
    cursor: pointer;
    transition: 0.35s;
    animation: hovering 0.35s;
    color: #555;
    fill: #555;
  }
  li a:hover {
    color: #000;
    fill: #000;
  }
  small {
    display: block;
    margin-top: 3em;
  }
}
</style>
