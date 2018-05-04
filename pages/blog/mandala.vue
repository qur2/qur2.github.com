<!--
title = "Mandala Board"
description = "Draw your very own mandala"
author = "Aurélien Scoubeau"
lang = "en"
date = 2017-06-20T20:20:20Z
tags = ["javascript", "vue.js", "svg", "d3.js"]
draft = true
cover = "http://res.cloudinary.com/qur2/image/upload/c_crop,h_711,q_auto:good,w_1440/v1525446153/blog/mandala-8bit_qh8gbo.png"
[cover_credit]
by = "onojk123"
by_url = "https://onojk123.deviantart.com/"
via = "deviantart (Creative Commons)"
via_url = "https://onojk123.deviantart.com/art/Creative-Commons-Mandala-44-664008414"
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
