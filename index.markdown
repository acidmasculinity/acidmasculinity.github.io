---
layout: home
title: "Anon: An Annotated Bibliography"
---

Resources, recovery material and academic sources that I recommend to
other anons.

<section>
  <h2>Resources</h2>
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
    <h2>Recovery</h2>
{% assign subjects = site.disengage | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- if subj.disabled -%}
    {%- continue -%}
  {%- endif -%}

  <section>
    <h3>{{- subj.name | default: subject.name -}}</h3>
    {% for disengage in subject.items %}
    {%- if disengage.disabled -%}
      {%- continue -%}
    {%- endif -%}
    {% include entry.html entry=disengage %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<section>
    <h2>Academic</h2>
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
    {% include entry.html entry=source %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<section>
    <h2>Far-Right</h2>
{% assign subjects = site.far_right | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- if subj.disabled -%}
    {%- continue -%}
  {%- endif -%}

  <section>
    <h3>{{- subj.name | default: subject.name -}}</h3>
    {% for disengage in subject.items %}
    {%- if disengage.disabled -%}
      {%- continue -%}
    {%- endif -%}
    {% include entry.html entry=disengage %}
    {% endfor %}
  </section>
{% endfor %}
</section>
