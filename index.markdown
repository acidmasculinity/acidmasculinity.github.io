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
  {%- assign items = subject.items | where: "disabled", false -%}

  <section>
    <h3>{{- subj.name | default: subject.name -}}</h3>
    {% for source in items %}
    {% include entry.html entry=source %}
    {% endfor %}
  </section>
{% endfor %}
</section>

<hr>

<section>
  <header>
    <h2>Lore</h2>
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

<hr>

<section>
  <header>
    <h2>Research Resources</h2>
  </header>
{% assign subjects = site.aca_resource | group_by: "subject" | sort_natural -%}
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

<hr>

<section>
  <header>
    <h2>Background</h2>
  </header>
{% assign subjects = site.other | group_by: "subject" | sort_natural -%}
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
    <h2>Leisure</h2>
  </header>
{% assign subjects = site.leisure | group_by: "subject" | sort_natural -%}
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
    <h2>Totalism</h2>
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

<hr>

<section>
  <header>
    <h2>Primary Sources</h2>
    <p>Far-right media, networked culture and other media</p>
  </header>
{% assign subjects = site.primary | group_by: "subject" | sort_natural -%}
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
