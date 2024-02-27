---
title: this blog
---

A bit of info about how I built this blog:

### static site generator

I'm using <a href="https://www.11ty.dev/">Eleventy</a> 
for static site generation. I've been a fan of 11ty for a while
and was already familiar with it, so I just kept using it. 

There isn't much to the site! I want to say that the 
<a href="https://github.com/kindohm/blog2/tree/main">source code</a> 
speaks for itself 🤷, but that's kinda disingenuous. 

I wanted this blog to be ultra simple:

- make it more like a linear journal
- don't bother with navigation until necessary
- just make it look like a text file

Following those principles, my 11ty structure is pretty basic:

- content in a `content` folder
- posts/entries in a `content/blog` folder
- trivial HTML shell layout in `_includes/layout.njk`

I also added <a href="/rss.xml">rss</a> and <a href="/atom.xml">atom</a>
feeds using the `@11ty/eleventy-plugin-rss` library.

### mobile / screen sizes

There's no nav, columns, or anything funky about the layout here, so
it just fine on a mobile screen out of the box:

{% image "mobile.png", "mobile view", "30em" %}

### colocated images

Colocating images with posts in Eleventy wasn't intuitive to figure
out. I referenced these items to accomplish it:

- <a href="https://gfscott.com/blog/eleventy-img-without-central-image-directory/">Using the Eleventy Image plugin without a central image folder</a>
- <a href="https://www.11ty.dev/docs/plugins/image/#asynchronous-shortcode">Eleventy image shortcode</a>

### build/deploy/hosting

The source code for this blog is located on github.com, so I'm just using github actions
and a `gh-pages` branch to host the site. 

Building a static site with a `yarn` command is pretty trivial in a github action. After that,
you can publish it to a `gh-pages` branch with the `peaceiris/actions-gh-pages@v3` action:

```
const x = () => {
  return 'blah';
}
```

```yaml
name: Eleventy Build
on:
  push:
    branches:
      - main
jobs:
  build-to-gh-pages-branch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: "20.x"
      - run: yarn
      - run: yarn run build:prod
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.FANCY_SECRET }}
          publish_dir: ./_site
```

Unfortunately I haven't figured out how to get fenced code blocks
to render correctly when they have blank lines.