---
layout: page
title: Past Meetups
permalink: /archives/
---
We've finally reached a point where having a dedicated past meet-ups page is necessary. The existence of this page is a milestone for Talk.CSS. Thank you all for your continuous support!

<ul class="l-past-events c-past-events">
  {% for post in site.posts offset:1 %}
    <li class="l-past-event c-past-event">
      <a class="c-past-event__link" href="{{ post.url | prepend: site.baseurl }}">
        <span class="c-past-event__meta">{{ post.event-date | date: "%b %-d, %Y" }}</span>
        <h3>{{ post.title }}</h3>
      </a>
    </li>
  {% endfor %}
</ul>
