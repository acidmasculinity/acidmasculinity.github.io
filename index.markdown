---
layout: home
title: "Anon: An Annotated Bibliography"
---

Resources, recovery material and academic sources that I recommend to
other anons.  There is also a list of primary sources of far-right
media, internet culture and other media popular in these areas.

<section>
  <header>
    <h2>Resources</h2>
  </header>
  {% for source in site.resource %}
    {%- if source.disabled -%}
      {%- continue -%}
    {%- endif -%}
    <section class="bib">
      <div class="bib-title">
        <h3 class="bib-heading"><i>{{- source.title -}}</i></h3>.
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
  <header>
    <h2>Recovery</h2>
  </header>
{% assign subjects = site.recovery | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- if subj.disabled -%}
    {%- continue -%}
  {%- endif -%}

  <section>
    <h3>{{- subj.name | default: subject.name -}}</h3>
    {% for recovery in subject.items %}
    {%- if recovery.disabled -%}
      {%- continue -%}
    {%- endif -%}
    {% include entry.html entry=recovery %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<section>
  <header>
    <h2>Lore</h2>
    <p>History and journalism</p>
  </header>
{% assign subjects = site.lore | group_by: "subject" | sort_natural -%}
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
  <header>
    <h2>Research Resources</h2>
  </header>
{% assign subjects = site.aca_resource | group_by: "subject" | sort_natural -%}
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
  <header>
    <h2>Academic</h2>
  </header>
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
  <header>
    <h2>Primary Sources</h2>
    <p>Far-right media, internet culture and other media</p>
  </header>
{% assign subjects = site.primary | group_by: "subject" | sort_natural -%}
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
