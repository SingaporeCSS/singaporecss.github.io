---
layout: page
title: Speaking at Talk.CSS
permalink: /speakers/
---
{% for speaker in site.data.speakers %}{% assign count = forloop.length %}{% endfor %}

We've finally reached a point where enough people have spoken at Talk.CSS to warrant having a dedicated past speakers page. The existence of this page (as well as the [past meetups page]({{ site.url }}/archives)) is a milestone for Talk.CSS.

So far, {{ count }} lovely people have spoken at Talk.CSS, we want you to be one of them too. If you're thinking, “but I have nothing to talk about”, we can help. Anything related to CSS will work. It could be something you debugged at work, or about a new property you read about, or something you built, or even a rant about why something doesn't work the way you want it.

Even if you just have an inkling of an idea, do get in touch with Chris or Hui Jing. You can email singaporecss@outlook.com, send us messages on [meetup.com](https://www.meetup.com/SingaporeCSS) or [Facebook](https://www.facebook.com/SingaporeCSS/), tweet at us ([@SingaporeCSS](https://twitter.com/SingaporeCSS), [@cliener](https://twitter.com/cliener) and [@hj_chen](https://twitter.com/hj_chen)), ping us on the [KopiJS slack channel](https://kopijs.slack.com/) or our own [Gitter channel](https://gitter.im/SingaporeCSS/discussions). We are totally accessible.

<ul class="l-speakers c-speakers">
  {% for speaker in site.data.speakers %}
  {% assign count = forloop.length %}
  <div class="l-speaker c-speaker">
    <figure>
      <img class="c-speaker__img" src="{{ site.url }}/assets/img/speakers/{{ speaker[1].shortcode }}.jpg" srcset="{{ site.url }}/assets/img/speakers/{{ speaker[1].shortcode }}@2x.jpg 2x" alt="{{ speaker[0].name }}"/>
      {% if speaker[1].twitter %}
      <figcaption><a class="c-speaker__link" href="https://twitter.com/{{ speaker[1].twitter }}">@{{ speaker[1].twitter }}</a></figcaption>
      {% elsif speaker[1].github %}
      <figcaption><a class="c-speaker__link" href="https://github.com/{{ speaker[1].github }}">@{{ speaker[1].github }}</a></figcaption>
      {% else %}
      <figcaption><span class="c-speaker__link">@{{ speaker[1].shortcode }}</span></figcaption>
      {% endif %}
    </figure>
    <p class="c-speaker__intro">{{ speaker[1].bio }}</p>
  </div>
  {% endfor %}
</ul>
