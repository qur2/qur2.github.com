<!--
title = "A small pattern to schedule animations"
description = "Reducing for scheduling"
author = "Aurélien Scoubeau"
lang = "en"
date = 2017-05-31T22:22:22Z
tags = ["javascript", "vue.js", "animation"]
-->

Recently, I was doing some CSS animation work with [Vue.js](https://vuejs.org/) and I had to chain animations. In general, I try to split the work into small and workable units. In case of an animation, if possible, I split it into smaller standalone bits. I find it easier to work with, and then it just needs to be orchestrated for the final result. I can also reuse the standalone parts if needed.
Also, because I was using vue, I wanted to use its small but powerful API for the animation. Another requirement was to drive the animation based on data / props of my components. Let's dig into it!

## How do you orchestrate?

Say I have 3 animations to chain. Since I am using vue, that means I want to update the component data 3 times in a timely fashion. Because it is so simple, there's no need to reach for external libraries or some fancy 3rd-party component. I really just want to do something small myself.

The naive approach is to do something like this:

```javascript
export default {
  data() {
    return {
      // used for initial render
      anim: "head"
    };
  },
  mounted() {
    // update the class name after .5 and 1 second
    setTimeout(() => {
      this.anim = "middle";
      setTimeout(() => {
        this.anim = "tail";
      }, 500);
    }, 500);
  },
  render(h) {
    return h("div", {
      attrs: {
        class: this.anim
      }
    });
  }
};
```

That's an inelegant piece of code for at least 2 reasons:

* The handling of the CSS classes is scattered across 2 areas.
* The `setTimeout` calls are nested and chaining a bigger number of animations is troublesome.

The first item is easily solved: the initial class could be set in the `mounted` function. But still it's hard to see all the classes at once.
The second one, however, is a bit harder to crack. My first idea was to wrap the `setTimeout` call in a promise to be able to chain them. But introducing the magic of promise for such a tiny thing sounded like too much. Plus, to not repeat the same function, some kind of loop would help.

## Enters the reduced solution

Take one step back and think: what are we trying to do? Call a function every ⨉⨉ms. And the calls don't even need to be sequential, they can all be scheduled at the beginning with the correct timing.
In code, that means we could compute an array of 3 values `[0, 500, 1000]` and map over it to call `setTimeout`. That sound like a good start. But somehow we still need to get the adequate class name based on the timing / index and set it. That still sounds like a lot of work. It would be nicer to do it all at once.
What about iterating over the class names and computing the timing on the fly? Fortunately, That's exactly what we can use `reduce` for!

See for yourself:

```javascript
export default {
  data() {
    return {
      anim: undefined
    };
  },
  mounted() {
    ["head", "middle", "tail"].reduce((t, className) => {
      setTimeout(() => {
        this.anim = className;
      }, t);
      return t + 500;
    }, 0);
  },
  render(h) {
    return h("div", {
      attrs: {
        class: this.anim
      }
    });
  }
};
```

That is much nicer:

* Self-contained class handling: you need to look at only one place in the code to check the logic. And the classes are all part of a single array.
* No nested function calls: just extend the array to schedule more updates.

Overall, we now have a way to schedule component updates with a minimal amount of code. We can drive our animations nicely, or really anithing else that depends on component data!

## Further improvements

Remember about the extra flexibility and control of this solution? The delay between updates could be trivially controlled by a component prop:

```javascript
export default {
  props: ["delay"],
  mounted() {
    ["head", "middle", "tail"].reduce((t, className) => {
      setTimeout(() => {
        this.anim = className;
      }, t);
      return t + this.delay;
    }, 0);
  }
  // ...
};
```

Or you could associate a delay with each class name and use that inside the reduce loop:

```javascript
// ...
[["head", 500], ["middle", 750], ["tail", 500]].reduce(
  (t, [className, delay]) => {
    t += delay;
    setTimeout(() => {
      this.anim = className;
    }, t);
    return t;
  },
  0
);
// ...
```

If you need to know about the updates from a parent component, a simple way would be to just emit an event in the `setTimeout` call:

```javascript
// ...
["head", "middle", "tail"].reduce((t, className) => {
  setTimeout(() => {
    this.anim = className;
    this.$emit("update!", { classname, t });
  }, t);
  return t + 500;
}, 0);
// ...
```

Really, if you drive your rendering from props and data, there's no limit!
