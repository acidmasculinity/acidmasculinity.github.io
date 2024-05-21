---
layout: home
title: "Anon: An Annotated Bibliography"
---

Books and other media I recommend anons.

<section>
  <h2>Resource</h2>
      {% for source in site.resource %}
      {%- if source.disabled -%}
          {%- continue -%}
      {%- endif -%}
      <section class="bib">
          <div class="bib-title">
<h3 class="bib-heading">
{% if source.authors and source.authors.size > 0 %}
{{ source.authors | array_to_sentence_string }}.
{% endif %}
{% if source.article %}
"{{ source.article }}."
{% endif %}
<i>{{- source.title -}}</i>

          {%- if source.version -%}, {{ source.version -}}{%- endif -%}
          {%- if source.other -%}, {{ source.other -}}{%- endif -%}
          {%- if source.publisher -%}, {{ source.publisher -}}{%- endif -%}
        </h3>
  
        {%- if source.volume -%}, vol. {{ source.volume -}}{%- endif -%}
        {%- if source.issue -%}, no. {{ source.issue -}}{%- endif -%}
  
        {%- if source.year -%}, {{ source.year -}}{%- endif -%}
  
        {%- if source.pages -%}, pp. {{ source.pages -}}{%- endif -%}
        .
        {% if source.doi %}
        <a href="https://doi.org/{{- source.doi -}}">doi:{{- source.doi -}}</a>.
        {% endif %}
        {% if source.link %}
        <a href="{{- source.link -}}">{{- source.link | replace_first: "https://", "" -}}</a>.
        {% endif %}
      </div>
      <div class="bib-anno">
      {{- source.content | markdownify -}}
      </div>
    </section>
    {% endfor %}
</section>

<section>
    <h2>Stories</h2>
{% assign subjects = site.story | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- if subj.disabled -%}
    {%- continue -%}
  {%- endif -%}

  <section>
    <h3>{{- subj.name | default: subject.name -}}</h3>
    {% for story in subject.items %}
    {%- if story.disabled -%}
      {%- continue -%}
    {%- endif -%}
    <section class="bib">
      <div class="bib-title">
        <h4 class="bib-heading">
          {% if story.authors and story.authors.size > 0 %}
            {{ story.authors | array_to_sentence_string }}.
          {% endif %}
          {% if story.article %}
          "{{ story.article }}."
          {% endif %}
          <i>{{- story.title -}}</i>

          {%- if story.version -%}, {{ story.version -}}{%- endif -%}
          {%- if story.other -%}, {{ story.other -}}{%- endif -%}
          {%- if story.publisher -%}, {{ story.publisher -}}{%- endif -%}
        </h4>
  
        {%- if story.volume -%}, vol. {{ story.volume -}}{%- endif -%}
        {%- if story.issue -%}, no. {{ story.issue -}}{%- endif -%}
  
        {%- if story.year -%}, {{ story.year -}}{%- endif -%}
  
        {%- if story.pages -%}, pp. {{ story.pages -}}{%- endif -%}
        .
        {% if story.doi %}
        <a href="https://doi.org/{{- story.doi -}}">doi:{{- story.doi -}}</a>.
        {% endif %}
        {% if story.link %}
        <a href="{{- story.link -}}">{{- story.link | replace_first: "https://", "" -}}</a>.
        {% endif %}
      </div>
      <div class="bib-anno">
      {{- story.content | markdownify -}}
      </div>
    </section>
    {% endfor %}
  </section>
{% endfor %}
</section>

<section>
    <h2>Sources</h2>
{% assign subjects = site.source | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- if subj.disabled -%}
    {%- continue -%}
  {%- endif -%}

  <section>
    <h3>{{- subj.name | default: subject.name -}}</h3>
    {% for source in subject.items %}
    {%- if source.disabled -%}
      {%- continue -%}
    {%- endif -%}
    <section class="bib">
      <div class="bib-title">
        <h4 class="bib-heading">
          {% if source.authors and source.authors.size > 0 %}
            {{ source.authors | array_to_sentence_string }}.
          {% endif %}
          {% if source.article %}
          "{{ source.article }}."
          {% endif %}
          <i>{{- source.title -}}</i>

          {%- if source.version -%}, {{ source.version -}}{%- endif -%}
          {%- if source.other -%}, {{ source.other -}}{%- endif -%}
          {%- if source.publisher -%}, {{ source.publisher -}}{%- endif -%}
        </h4>
  
        {%- if source.volume -%}, vol. {{ source.volume -}}{%- endif -%}
        {%- if source.issue -%}, no. {{ source.issue -}}{%- endif -%}
  
        {%- if source.year -%}, {{ source.year -}}{%- endif -%}
  
        {%- if source.pages -%}, pp. {{ source.pages -}}{%- endif -%}
        .
        {% if source.doi %}
        <a href="https://doi.org/{{- source.doi -}}">doi:{{- source.doi -}}</a>.
        {% endif %}
        {% if source.link %}
        <a href="{{- source.link -}}">{{- source.link | replace_first: "https://", "" -}}</a>.
        {% endif %}
      </div>
      <div class="bib-anno">
      {{- source.content | markdownify -}}
      </div>
    </section>
    {% endfor %}
  </section>
{% endfor %}
</section>
