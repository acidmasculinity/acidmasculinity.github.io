---
layout: home
title: "Anon: An Annotated Bibliography"
---

My recommendations for extremely online 4chan types.
Mostly books I've found valuable or relatable.

<!-- - Martin Kantor. *Distancing: Avoidant Personality Disorder*. -->

<!-- - name:  Far-Right Canon -->
<!-- - J. R. R. Tolkien. *The Lord of the Rings* -->
<!-- - Andrew Anglin. [*A Normie's Guide to the Alt-Right*](https://web.archive.org/web/20231210135756/https://dailystormer.in/a-normies-guide-to-the-alt-right/). -->
<!-- - Andrew Mac Donald (William Pierce). [*The Turner Diaries*](https://archive.org/details/the-turner-diaries-andrew-mac-donald-william-pierce). -->
<!-- Philosphy -->
<!-- + Albert Camus. *The Rebel*. -->
<!-- + Max Stirner. The Unique and Its Property -->
<ul class="bib-ul">
{% for source in site.sources %}
  <li class="bib-li">
    {{ source.authors }}.
    <i>{{ source.title }}</i>.
    {% if source.site != nil %}
    {{ source.site }}.
    {% endif %}
    {% if source.URL != nil %}
    <a href="{{- source.URL -}}">{{- source.URL -}}</a>
    {% endif %}
  </li>
{% endfor %}
</ul>

## Links

+ [Evolve Program](https://evolveprogram.ca)
+ [Life After Hate](https://lifeafterhate.org)
