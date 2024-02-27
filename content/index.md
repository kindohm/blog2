---
title: indexxxx
layout: layout.njk
---

<h3>Hi, this is <a href="https://kindohm.com">Mike Hodnick's</a> blog. <a href="/why">Why?</a></h3>

{%- for post in collections.blog -%}

  <div>

  <p>---</p>
  <h3># <a href="{{ post.url }}">{{post.data | realTitle }}</a></h3>
  <p><time>{{ post.date | htmlDateString }}</time></p>
  {{ post.content  | safe}}
  </div>
{%- endfor -%}
