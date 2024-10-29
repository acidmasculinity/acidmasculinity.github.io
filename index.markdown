---
layout: home
title: "Anon: An Annotated Bibliography"
---

Resources, recovery material and academic sources that I recommend to
other anons.  There is also a list of primary sources of far-right
media, internet culture and other media popular in these areas.

Focuses on networked culture, leisure, invisible minorities, deviant
subcultures and totalism.

<hr>

<h2>Resources and Recovery</h2>

<section>
  <header>
    <h3>Resources</h3>
  </header>
  {% for source in site.resource %}
    {%- if source.disabled -%}
      {%- continue -%}
    {%- endif -%}
    <section class="bib">
      <div class="bib-title">
        <h4 class="bib-heading"><i>{{- source.title -}}</i></h4>.
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
    <h3>Recovery</h3>
  </header>
{% assign subjects = site.recovery | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- assign items = subject.items | where: "disabled", false -%}

  <section>
    <h4>{{- subj.name | default: subject.name -}}</h4>
    {% for source in items %}
    {% include entry.html entry=source %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<hr>

<h2>Semiserious</h2>

<section>
  <header>
    <h3>Lore</h3>
  </header>
{% assign subjects = site.lore | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- assign items = subject.items | where: "disabled", false -%}

  <section>
    <h3>{{- subj.name | default: subject.name -}}</h3>
    {% for source in items %}
    {% include entry.html entry=source %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<section>
  <header>
    <h3>Media and Primary Sources</h3>
    <p>Far-right media, networked culture and other media</p>
  </header>
{% assign subjects = site.media | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- assign items = subject.items | where: "disabled", false -%}

  <section>
    <h4>{{- subj.name | default: subject.name -}}</h4>
    {% for source in items %}
    {% include entry.html entry=source %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<hr>

<h2>Serious</h2>

<section>
  <header>
    <h3>Research Resources</h3>
  </header>
{% assign subjects = site.aca_resource | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- assign items = subject.items | where: "disabled", false -%}

  <section>
    <h4>{{- subj.name | default: subject.name -}}</h4>
    {% for source in items %}
    {% include entry.html entry=source %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<section>
  <header>
    <h3>Background</h3>
  </header>
{% assign subjects = site.background | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- assign items = subject.items | where: "disabled", false -%}

  <section>
    <h4>{{- subj.name | default: subject.name -}}</h4>
    {% for source in items %}
    {% include entry.html entry=source %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<section>
  <header>
    <h3>Totalism</h3>
    <p>(Self-)destructive and controlling groups</p>
  </header>
{% assign subjects = site.fascism | group_by: "subject" | sort_natural -%}
{% for subject in subjects %}
  {%- assign subj = site.subjects[subject.name] -%}
  {%- assign items = subject.items | where: "disabled", false -%}

  <section>
    <h3>{{- subj.name | default: subject.name -}}</h3>
    {% for source in items %}
    {% include entry.html entry=source %}
    {% endfor %}
  </section>
{% endfor %}
</section>
