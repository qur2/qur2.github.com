<!--
title = "Mandala Board"
description = "Draw your very own mandala"
author = "Aurélien Scoubeau"
lang = "en"
date = 2017-06-20T20:20:20Z
tags = ["javascript", "vue.js", "svg", "d3.js"]
draft = true
-->
<template>
  <blog-post slug="mandala">
    <template slot="content">
      <div class="demo-mandala">
        <mandala
          :width="500"
          :height="500"
          :segments="29"
        />
      </div>
    </template>
  </blog-post>
</template>

<script>
import BlogPost from "~/components/BlogPost"
import Mandala from "~/lab/mandala/Mandala.vue"

export default {
  components: {
    BlogPost,
    Mandala
  }
}
</script>
