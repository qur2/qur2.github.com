<!--
title = "Image Quest"
slug = "image-quest"
category = "Lab"
description = "Geometrical navigation for images"
author = "Aurélien Scoubeau"
lang = "en"
date = 2016-09-21T21:21:21Z
tags = ["javascript", "vue.js", "svg", "hud"]
cover = "http://res.cloudinary.com/qur2/image/upload/c_crop,g_center,h_944,q_auto:good,w_1800,x_0/c_scale,h_711,w_1440/v1525362046/blog/image-quest-hero_uqo12z.png"
[cover_credit]
by = "an organic entity"
via = "Fantasy Map Generator"
via_url="https://azgaar.github.io/Fantasy-Map-Generator/"
-->
<template>
  <blog-post slug="image-quest">
    <template slot="content">
      <article class="imagequest-demo content">
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

        <Markdown />
      </article>
    </template>
  </blog-post>
</template>

<script>
import BlogPost from "~/components/BlogPost"
import ImageQuest from "~/lab/imagequest/ImageQuest.vue"
import Markdown from "~/blog/image-quest.md"

export default {
  components: {
    ImageQuest,
    Markdown,
    BlogPost
  }
}
</script>

<style lang="stylus">
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
