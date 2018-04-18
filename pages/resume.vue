<template>
  <div class="page-resume">
    <section name="contact">
      <div class="readbox">
        <h3 name="top">{{ resume.basics.name }}</h3>
        <h1>{{ resume.basics.label }}</h1>
        <ul class="profiles">
          <li
            v-for="profile in resume.basics.profiles"
            :key="profile.url"
          >
            <a
              :href="profile.url"
              :title="profile.network"
            >
              <svg fill="black">
                <use
                  :href="`${sprite}#${profile.network.toLowerCase()}`"
                />
              </svg>
            </a>
          </li>
        </ul>
        <p class="intro">{{ resume.basics.summary }}</p>
      </div>
    </section>

    <section name="xp">
      <div
        v-for="(work, i) in resume.work"
        :key="i"
        class="work"
      >
        <div class="readbox">
          <div class="info">
            <h2>{{ work.position }}</h2>
            <div class="meta">
              <span class="meta-company">{{ work.company }}</span>
              <a
                :href="work.website"
                class="meta-website"
              >
                {{ work.website }}
              </a>
              <span class="meta-date">
                <span>{{ work.startDate }}</span>
                <span>{{ work.endDate || 'Today' }}</span>
              </span>
            </div>
            <p v-if="work.summary">{{ work.summary }}</p>
            <ul v-if="work.highlights">
              <li
                v-for="highlight in work.highlights"
                :key="highlight"
              >
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      name="skills"
      class="suffix-bg-separator"
      title="Skills & Interests"
    >
      <div class="readbox">
        <ul
          v-for="skill in resume.skills"
          :key="skill.name"
          class="skill"
        >
          <li>{{ skill.name }}</li>
          <li
            v-for="keyword in skill.keywords"
            :key="keyword"
          >
            {{ keyword }}
          </li>
        </ul>
        <ul class="skill">
          <li>Languages</li>
          <li
            v-for="lang in resume.languages"
            :key="lang.name"
          >
            {{ lang.name }}&nbsp;—&nbsp;{{ lang.level }}
          </li>
        </ul>
        <ul class="skill">
          <li>And more</li>
          <li
            v-for="interest in resume.interests"
            :key="interest.name"
          >
            {{ interest.name }}
          </li>
        </ul>
      </div>
    </section>

    <section
      name="education"
      class="suffix-bg-separator"
    >
      <div
        v-for="(education, i) in resume.education"
        :key="i"
        class="study"
      >
        <div class="readbox">
          <div class="info">
            <h2 class="meta-company">{{ education.studyType }}</h2>
            <p class="meta-area">{{ education.area }}</p>
            <p class="meta-website">{{ education.institution }}</p>
            <p class="meta-date">
              <span>{{ education.startDate }}</span>
              <span>{{ education.endDate }}</span>
            </p>
            <ul v-if="education.courses.length">
              <li
                v-for="course in education.courses"
                :key="course"
              >
                {{ course }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      name="references"
      class="suffix-bg-separator"
    >
      <div class="reference">
        <div class="readbox">
          <div
            v-for="reference in resume.references"
            :key="reference.name"
            class="quote"
          >
            <p>{{ reference.reference }}</p>
            <p class="meta-area">{{ reference.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <link
      href="https://fonts.googleapis.com/css?family=Domine|Open+Sans"
      rel="stylesheet"
    >
    <link
      href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Open+Sans"
      rel="stylesheet"
    >
  </div>
</template>

<script>
import resume from "../assets/resume.json"
import sprite from "../assets/social-icons.svg"
// import smoothscroll from 'smoothscroll-polyfill'

// if (window) {
//   smoothscroll.polyfill()
// }

export default {
  head: {
    title: "Aurélien Scoubeau | Resume"
  },
  data() {
    return {
      resume,
      sprite
    }
  }
}
</script>

<style lang="postcss">
.page-resume {
  font-size: responsive;
  font-family: "Open Sans", sans-serif;

  ul {
    list-style-type: none;
  }

  h1,
  h3,
  h4 {
    text-align: center;
    font-family: "Cabin Sketch", cursive;
    font-weight: 100;
  }

  section {
    margin: 0 auto;
    margin-bottom: 2em;
    line-height: 1.625;
  }

  .readbox {
    max-width: 44em;
    margin: 0 auto;
    position: relative;
    padding: 0 1em;
  }

  .info {
    text-align: left;

    h2 {
      font-family: "Domine", serif;
      font-size: 1.75em;
      margin: 0.5em 0;
    }
    p {
      margin: 0;
    }
  }

  .meta {
    width: 15em;
    box-sizing: border-box;
    padding-right: 1.75em;
    margin-bottom: 0.75em;
    text-align: left;
    position: relative;

    & > * {
      display: block;
    }
  }
  .meta-company {
    font-family: "Domine", serif;
    font-size: 1.25em;
    font-weight: bold;
  }
  .meta-website {
    font-size: 0.85em;
    text-decoration: none;
    color: grey;
  }
  .meta-date span:first-child:after {
    content: "↦";
    margin: 0 0.25em;
  }
  .meta-date {
    white-space: nowrap;
  }

  section[name="contact"] {
    .readbox > :first-child {
      margin-top: 1.5rem;
    }
    .readbox > :last-child {
      margin-bottom: 1.5rem;
    }
    .readbox > * {
      margin: 0.5rem auto;
    }
    h1 {
      font-size: 2em;
    }

    .profiles {
      padding: 0;
      text-align: center;

      li {
        display: inline-block;
        width: 2em;
        height: 2em;
        margin: 0 0.75em;
      }
      li svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  section[name="xp"] {
    &:before {
      content: " ";
      width: 100%;
      height: 1.48em;
      display: block;
      background-image: url(../assets/bg-waves-round.svg);
      background-repeat: repeat-x;
      background-position: center top;
      background-size: 3em;
    }

    @media (min-width: 26em) {
      .info {
        padding-left: 15em;
      }
      .meta {
        text-align: right;
        position: absolute;
        /*  makes up for the readbox padding */
        left: 1em;
        top: 3em;
      }
    }

    .work {
      margin-bottom: 2em;

      ul {
        margin: 1em 0 0 3em;
        padding: 0;
      }

      li:before {
        content: "✰";
        display: inline-block;
        margin-left: -1em;
        margin-right: 0.5em;
      }
    }

    .work:first-of-type {
      background-color: black;
      color: white;
      padding: 1em;
      margin-bottom: 2em;
      padding-bottom: 2em;
    }
  }

  .suffix-bg-separator:before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 3em;
    height: 3em;
    opacity: 0.85;
    background-size: 3em;
    background-position: 50% 50%;
  }

  section[name="skills"] {
    &:before {
      background-image: url(../assets/icon-flask.svg);
    }

    .readbox {
      display: flex;
      flex-wrap: wrap;
    }

    ul {
      padding: 0;
      margin: 0;
      display: inline-block;
      flex: 1 0 33%;
    }

    ul li:first-child {
      font-family: "Domine", serif;
      font-variant: small-caps;
      text-transform: uppercase;
      display: block;
      margin-top: 1em;
      font-weight: bold;
    }

    ul li {
      margin: 0.25em 0.75em;
      display: inline-block;
      border-radius: 0.15em;
      box-sizing: border-box;
      padding: 0 0.55em;
    }
  }

  section[name="education"] {
    &:before {
      background-image: url(../assets/icon-chalkboard.svg);
    }

    .study {
      .info {
        margin-bottom: 1em;
      }
      ul {
        padding: 0px;
        margin: 1em 0px 0px 1em;
      }
      li::before {
        content: "⦿";
        display: inline-block;
        margin-left: -1em;
        margin-right: 0.5em;
      }
    }
  }

  section[name="references"] {
    &:before {
      background-image: url(../assets/icon-medal.svg);
    }

    .quote {
      position: relative;
      padding: 0 1.5em;
      margin-bottom: 5em;

      .meta-area {
        position: absolute;
        top: 100%;
        right: 1em;
        margin-top: 1em;

        &::before {
          content: "—";
          margin-right: 0.5em;
        }
      }

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "\201C";
        display: inline-block;
        font-family: Georgia, serif;
        font-size: 2em;
        font-weight: bold;
        color: #999;
      }

      &::after {
        position: absolute;
        top: calc(100% - 0.5em);
        right: 0;
        content: "\201D";
        font-family: Georgia, serif;
        font-size: 2em;
        font-weight: bold;
        color: #999;
        padding-top: 0;
      }
    }
  }
}
</style>
