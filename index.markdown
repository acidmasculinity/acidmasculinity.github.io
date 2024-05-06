---
layout: home
title: "Anon: An Annotated Bibliography"
---

Books and other media I recommend anons.

{%- assign categories = site.sources | group_by: "category" | sort_natural -%}
{%- for category in categories %}
  {%- assign cat = site.categories[category.name] -%}
  {%- if cat.disabled -%}
    {%- continue -%}
  {%- endif -%}

  {{ category.name | inspect }}
  {{ cat | inspect }}
  <h2>{{- cat.name | default: category.name -}}</h2>
  {% for source in category.items %}
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
{% endfor %}
