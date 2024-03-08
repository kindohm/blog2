---
title: Colorable
---

A tidbit about this blog:

I am using <a href="https://github.com/jxnblk/colorable">jxnblk's `colorable`</a>
library to produce a random color palette for this site every time it is built[1].

`colorable` helps you learn when two colors have a sufficient contrast for
background and foreground colors.

I created a simple algorithm to generate an array of random colors which
uses `colorable` to determine if any of the random colors have sufficient
contrast. If none do, then I repeat the process until a good contrast
combo is obtained.

Then I put the foreground and background colors in the Eleventy `metadata.js`
data file, which is then used in the base layout's `<style>`.

{% image "./colorable01.png", "colorable 01", ["250"] %}

{% image "./colorable02.png", "colorable 02", ["250"] %}

{% image "./colorable03.png", "colorable 03", ["250"] %}

{% image "./colorable04.png", "colorable 04", ["250"] %}

Ugly? Yep. Fun? Yep.

[1] It is built every time I push to the git origin