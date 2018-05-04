## How does it work?

Here is the involved markup to set up the component:

```html
<svg is="image-quest" view-box="0 0 473.4 617.4" width="473.4" height="617.4">
  <g id="zones" slot="zones" style="display:none">
    <rect width="199" height="196" />
    <rect y="205" width="473.4" height="216" />
    <rect y="431" width="160" height="186.4" />
    <rect x="169" y="431" width="135" height="186.4" />
    <rect x="313" y="431" width="160.4" height="186.4" />
  </g>
  <image slot="figure" width="473.4" height="617.4" xlink:href="https://imgs.xkcd.com/comics/christmas_settings.png" />
</svg>
```

Watch out for the key elements:
 * The rectangles, which were drawn on top of the image, define the areas and the mini-display.</li>
 * The layer that contains the rectangles has two attributes: id = zones and slot = zones.</li>
 * The image is referenced from the SVG, not actually embedded.</li>

Those are still some manual steps to be performed, but hopefully it's straightforward to understand.
