---
title: Mike Hodnick's Blog
layout: layout.njk
---

<div style="display: flex; gap: 1rem;">
<h1>hi, this is <a href="https://kindohm.com">Mike Hodnick's</a> blog.</h1>
<h3 class="no-before"><a href="/why">why?</a></h3>
</div>

{%- for post in collections.blog -%}

  <article>

  <p>---</p>
  <h2><a href="{{ post.url }}">{{post.data | realTitle }}</a></h2>
  <p><time>{{ post.date | htmlDateString }}</time></p>
  {{ post.content  | safe}}
  </article>
{%- endfor -%}
