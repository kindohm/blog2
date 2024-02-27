---
title: Mike Hodnick's Blog
layout: layout.njk
---

<div style="display: flex; gap: 1rem;">
<h1>hi, this is <a href="https://kindohm.com">Mike Hodnick's</a> blog.</h1>
<h3><a href="/why">why?</a></h3>
</div>

{%- for post in collections.blog -%}

  <div>

  <p>---</p>
  <h3># <a href="{{ post.url }}">{{post.data | realTitle }}</a></h3>
  <p><time>{{ post.date | htmlDateString }}</time></p>
  {{ post.content  | safe}}
  </div>
{%- endfor -%}
