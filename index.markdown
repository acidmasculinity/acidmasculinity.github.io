---
layout: home
title: "Anon: An Annotated Bibliography"
---

Books and other media I recommend anons.

{% assign subjects = site.sources | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- if subj.disabled -%}
    {%- continue -%}
  {%- endif -%}

  <section>
    <h2>{{- subj.name | default: subject.name -}}</h2>
    {% for source in subject.items %}
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
          {%- if source.publisher -%}, {{ source.publisher -}}{%- endif -%}
        </h3>
  
        {%- if source.volume -%}, vol. {{ source.volume -}}{%- endif -%}
        {%- if source.issue -%}, no. {{ source.issue -}}{%- endif -%}
  
        {%- if source.year -%}, {{ source.year -}}{%- endif -%}
  
        {%- if source.pages -%}, pp. {{ source.pages -}}{%- endif -%}
        .
        {% if source.doi %}
        <a href="https://doi.org/{{- source.doi -}}">doi:{{- source.doi -}}</a>
        {% endif %}
        {% if source.URL %}
        <a href="{{- source.URL -}}">{{- source.URL | replace_first: "https://", "" -}}</a>
        {% endif %}
      </div>
      <div class="bib-anno">
      {{- source.content | markdownify -}}
      </div>
    </section>
    {% endfor %}
  </section>
{% endfor %}
