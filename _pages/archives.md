---
layout: page
title: Past Meetups
permalink: /archives/
---
We've finally reached a point where having a dedicated past meet-ups page is necessary. There's also [a speakers page]({{ site.url }}/speakers/) now. The existence of this page is a milestone for Talk.CSS. Thank you all for your continuous support!

If you're interested to become a speaker, do get in touch with Hui Jing or Wei. You can email singaporecss@outlook.com, send us messages on [meetup.com](https://www.meetup.com/SingaporeCSS) or [Facebook](https://www.facebook.com/SingaporeCSS/), tweet at us ([@SingaporeCSS](https://twitter.com/SingaporeCSS), [@hj_chen](https://twitter.com/hj_chen) or [@wgao19](https://twitter.com/wgao19)), ping us on the [KopiJS slack channel](https://kopijs.slack.com/) or our own [Gitter channel](https://gitter.im/SingaporeCSS/discussions). We are totally accessible.

<ul class="l-past-events c-past-events">
  {% for post in site.posts offset:0 %}
    <li class="l-past-event c-past-event">
      <a class="c-past-event__link" href="{{ post.url | prepend: site.baseurl }}">
        <span class="c-past-event__meta">{{ post.event-date | date: "%b %-d, %Y" }}</span>
        <h3>{{ post.title }}</h3>
      </a>
    </li>
  {% endfor %}
</ul>
