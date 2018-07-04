<!--
title = "About JS weight"
description = "A quick weight comparison between React and Vue"
author = "Aurélien Scoubeau"
lang = "en"
date = 2018-07-02T02:02:02Z
tags = ["javascript", "vue.js", "react"]
cover = "https://res.cloudinary.com/qur2/image/upload/c_crop,g_center,h_711,w_1440,y_96/v1530648931/blog/39717994714_c24726abf8_o.jpg"

[cover_credit]
by = "Steve Walker"
by_url = "https://www.flickr.com/photos/stephoto27/"
via = "Flickr (Creative Commons)"
via_url = "https://www.flickr.com/photos/stephoto27/39717994714/"
-->
There is a lot of passion going into war / comparison / competition between JS frameworks and librairies (trying to stay generic here :))

While many of those tools are kind of equivalent (at least to the vast majority of dev teams), the weight aspect is often left out. I find it weird since many seem to agree that we should make our builds as small as possible.

In that optic, using the official CLIs (`create-react-app` and `vue-cli`), I created two empty projects. I built both to have an understanding of how much they weight in a production build.

Here are the results:

```bash
# first react
~/somewhere
❯ npx create-react-app --version
1.5.2

~/somewhere
❯ npx create-react-app react-weight

~/somewhere
❯ cd react-weight

~/somewhere/react-weight
❯ NODE_ENV=production; npm run build

> react-weight@0.1.0 build /Users/aurelien/src/react-weight/react-weight
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  36.94 KB  build/static/js/main.a0b7d8d3.js
  299 B     build/static/css/main.c17080f1.css

❯ ls -alh build/*/*
build/static/css:
-rw-r--r--  1 fry  planetexpress   650B  2 Jul 12:57 main.c17080f1.css
-rw-r--r--  1 fry  planetexpress   1.3K  2 Jul 12:57 main.c17080f1.css.map

build/static/js:
-rw-r--r--  1 fry  planetexpress   115K  2 Jul 12:57 main.a0b7d8d3.js
-rw-r--r--  1 fry  planetexpress   469K  2 Jul 12:57 main.a0b7d8d3.js.map

build/static/media:
-rw-r--r--  1 fry  planetexpress   2.6K  2 Jul 12:57 logo.5d5d9eef.svg

# then vue
~/somewhere
❯ vue --version
3.0.0-rc.3

~/somewhere
❯ npx vue create vue-weight # selected default

~/somewhere
❯ cd vue-weight

~/somewhere/vue-weight
❯ NODE_ENV=production; npm run build

 DONE  Compiled successfully in 7699ms

  File                                 Size               Gzipped

  dist/js/chunk-vendors.512e6579.js    74.14 kb           26.81 kb
  dist/js/app.d6eeaec1.js              4.25 kb            1.59 kb
  dist/css/app.ceadf2cc.css            0.33 kb            0.23 kb

~/somawhere/vue-weight
❯ ls -alh dist/*/*
-rw-r--r--  1 fry  planetexpress   343B  2 Jul 13:01 dist/css/app.ceadf2cc.css
-rw-r--r--  1 fry  planetexpress   6.7K  2 Jul 13:01 dist/img/logo.82b9c7a5.png
-rw-r--r--  1 fry  planetexpress   4.3K  2 Jul 13:01 dist/js/app.d6eeaec1.js
-rw-r--r--  1 fry  planetexpress    21K  2 Jul 13:01 dist/js/app.d6eeaec1.js.map
-rw-r--r--  1 fry  planetexpress    74K  2 Jul 13:01 dist/js/chunk-vendors.512e6579.js
-rw-r--r--  1 fry  planetexpress   369K  2 Jul 13:01 dist/js/chunk-vendors.512e6579.js.map

```

According to `ls`, react scores at 36.04Kb (115Kb not gzipped) and vue weights 28.40Kb (78.39Kb not gzipped).
That makes vue 7.36Kb lighter. That's a 20.42% reduction, good to take in my opinion!

Of course, depending on the size of your codebase, this gain may become less relevant. But on the other hand, if you start a new project today, you can start with 7.36Kb less in your (gzipped) weight budget!