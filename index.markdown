---
layout: home
title: "Anon: An Annotated Bibliography"
---

An annotated bibliography of sources and resources for "internet
protest masculinities" or extremely online 4chan types.

<!-- - Martin Kantor. *Distancing: Avoidant Personality Disorder*. -->

<!-- - name:  Far-Right Canon -->
<!-- - J. R. R. Tolkien. *The Lord of the Rings* -->
<!-- - Andrew Anglin. [*A Normie's Guide to the Alt-Right*](https://web.archive.org/web/20231210135756/https://dailystormer.in/a-normies-guide-to-the-alt-right/). -->
<!-- - Andrew Mac Donald (William Pierce). [*The Turner Diaries*](https://archive.org/details/the-turner-diaries-andrew-mac-donald-william-pierce). -->
<!-- Philosphy -->
<!-- + Albert Camus. *The Rebel*. -->
<!-- + Max Stirner. The Unique and Its Property -->
{% assign categories = site.sources | group_by: "category" %}
{% for category in categories %}
  <h2>{{ category.name }}</h2>
  {% for source in category.items %}
  <section class="bib">
    <h3 class="bib-title">
      {{ source.authors | array_to_sentence_string }}.
      <i>{{ source.title }}</i>.
      {% if source.site != nil %}
      {{ source.site }}.
      {% endif %}
      {% if source.URL != nil %}
      <a href="{{- source.URL -}}">{{- source.URL -}}</a>
      {% endif %}
    </h3>
    <div class="bib-anno">
    {{- source.content | markdownify -}}
    </div>
  </section>
  {% endfor %}
{% endfor %}

## Links

+ [Evolve Program](https://evolveprogram.ca)
+ [Life After Hate](https://lifeafterhate.org)
