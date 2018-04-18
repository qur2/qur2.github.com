<!--
title = "Image Quest"
slug = "image-quest"
description = "Geometrical navigation for images"
author = "Aurélien Scoubeau"
lang = "en"
date = 2016-09-21T21:21:21Z
tags = ["javascript", "vue.js", "svg", "hud"]
-->
<template>
  <blog-post slug="image-quest">
    <template slot="content">
      <article class="imagequest-demo markdown-body">
        <p>Like a comic viewer, it allows to zoom and cycle through areas of the picture.</p>

        <svg
          is="image-quest"
          :width="473.4"
          :height="617.4"
          view-box="0 0 473.4 617.4"
        >
          <g
            id="zones"
            slot="zones"
            style="display:none"
          >
            <rect
              width="199"
              height="196"
            />
            <rect
              y="205"
              width="473.4"
              height="216"
            />
            <rect
              y="431"
              width="160"
              height="186.4"
            />
            <rect
              x="169"
              y="431"
              width="135"
              height="186.4"
            />
            <rect
              x="313"
              y="431"
              width="160.4"
              height="186.4"
            />
          </g>
          <image
            slot="figure"
            width="473.4"
            height="617.4"
            xlink:href="https://imgs.xkcd.com/comics/christmas_settings.png"
          />
        </svg>

        <h2>How does it work?</h2>
        <p>Here is the involved markup to set up the component:</p>

        <SampleMarkup />

        <p>Watch out for the key elements:</p>
        <ul>
          <li>The rectangles, which were drawn on top of the image, define the areas and the mini-display.</li>
          <li>The layer that contains the rectangles has two attributes: id = zones and slot = zones.</li>
          <li>The image is referenced from the SVG, not actually embedded.</li>
        </ul>
        <p>Those are still some manual steps to be performed, but hopefully it's straightforward to understand.</p>
      </article>
    </template>
  </blog-post>
</template>

<script>
import BlogPost from "~/components/BlogPost"
import ImageQuest from "~/lab/imagequest/ImageQuest.vue"
import SampleMarkup from "~/blog/image-quest-markup.md"

export default {
  components: {
    ImageQuest,
    SampleMarkup,
    BlogPost
  }
}
</script>

<style lang="postcss">
.imagequest-demo {
  margin: 1rem;
  padding: 1rem;
}

.imagequest {
  width: 55%;
  height: 66vh;
  max-height: 100%;
  margin: 2rem auto;
  border: 1px solid rgba(0, 0, 0, 0.5);

  .imagequest-img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
