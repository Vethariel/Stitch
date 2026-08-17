# Guía de búsqueda de fuentes — Proyecto Stitch

> Complemento de `semana-02-problema.md`  
> Objetivo: ubicar literatura que apoye (o matice) las afirmaciones pendientes y los enfoques prioritarios.  
> Uso: copiar queries a Scopus / Scholar / etc.; ajustar con `AND` / `OR` / `*` según ruido.

---

## 1. Dónde buscar (y para qué)

| Fuente | Qué da bien | Cómo entrar (típico) |
|--------|-------------|----------------------|
| **Scopus** | Cobertura amplia, citas, filtros por año/área; queries booleanas sólidas | Acceso institucional (universidad) o VPN |
| **Web of Science** | Similar a Scopus; útil para contrastar | Misma vía institucional |
| **Google Scholar** | Hallazgo rápido + “Cited by” + PDF | [scholar.google.com](https://scholar.google.com) |
| **Semantic Scholar** | Resumen/TLDR, papers relacionados, filtros por campo | [semanticscholar.org](https://www.semanticscholar.org) |
| **ACM Digital Library** | CS education, ITS, HCI educativos, agentes | [dl.acm.org](https://dl.acm.org) (a menudo vía uni) |
| **IEEE Xplore** | ITS, adaptive learning, edtech más “ingeniería” | [ieeexplore.ieee.org](https://ieeexplore.ieee.org) |
| **ERIC** | Educación, motivation, dropout, formative assessment | [eric.ed.gov](https://eric.ed.gov) (gratis) |
| **arXiv / PsyArXiv** | Preprints (CS.edu, HCI, learning sciences) | [arxiv.org](https://arxiv.org), [psyarxiv.com](https://psyarxiv.com) |
| **Connected Papers / ResearchRabbit / Litmaps** | Mapas de citas a partir de 1 paper semilla | Tras tener 1–2 hits buenos |

**Prioridad práctica este semestre:** 1–2 fuentes serias por afirmación clave (**1, 3, 4, 6, 8, 13, 15**) + 1 por cada enfoque prioritario (mastery/OLM, scaffolding, presence/trust, adaptive explanation).

---

## 2. Cómo trabajar cada búsqueda (método corto)

1. **Partir de la afirmación** (tabla abajo), no de “todo el proyecto”.
2. **Correr la query ancha** → mirar títulos/abstracts de los primeros 20–30.
3. **Apretar** con filtros: Education / Computer Science / Psychology; años recientes *más* clásicos citados.
4. **Elegir 1 semilla** (review o paper muy citado) → **Cited by** + referencias hacia atrás (snowball).
5. Si la lectura entra al laboratorio, sumarla al inventario (`src/data/papers.ts` → página `/lecturas`): elementos relevantes + reflexión / aplicación en Stitch.
6. Si el ruido es alto: quitar términos vagos (`learning` solo) y forzar pares (`dropout AND "computer science"`).

### Sintaxis rápida Scopus

- `TITLE-ABS-KEY ( ... )` — título + abstract + keywords (recomendado).
- `AND` / `OR` / `AND NOT`
- Comillas para frase: `"cognitive load"`
- Truncación: `personaliz*`
- Cercanía: `W/n` (p. ej. `tutor W/3 agent`)

Ejemplo base:

```
TITLE-ABS-KEY ( "information overload" AND ( dropout OR attrition ) AND ( e-learning OR "online learning" OR "computer science" ) )
```

### Google Scholar / Semantic Scholar

Misma idea en lenguaje natural + comillas. Ej.:

```
"pedagogical agent" engagement OR motivation tutoring
"open learner model" mastery visualization
```

Luego ordenar por relevancia o por citas; abrir “Cited by”.

---

## 3. Queries por afirmación pendiente

Cada bloque: **Scopus (TITLE-ABS-KEY)** + **variantes** para Scholar/ACM/ERIC. Ajustá según lo que salga.

### #1 — Exceso de información + poco acompañamiento → abandono (técnico / online)

**Scopus**

```
TITLE-ABS-KEY (
  ( "information overload" OR "cognitive load" OR "too much information" )
  AND ( dropout OR attrition OR abandon* OR "non-completion" )
  AND ( e-learning OR "online learning" OR MOOC OR "computer science" OR programming OR "CS education" )
)
```

**Variantes**

```
cognitive load programming education dropout
"information overload" "online learning" attrition
isolation OR "lack of support" dropout "computer science" education
```

**Venues útiles:** *Computers & Education*, *Internet and Higher Education*, SIGCSE / ICER.

---

### #2 — Abandono también con obligación / motivación mixta (no solo “curiosos”)

**Scopus**

```
TITLE-ABS-KEY (
  ( dropout OR attrition OR "training completion" )
  AND ( mandatory OR obligated OR extrinsic OR "external motivation" OR "required training" )
  AND ( learning OR training OR e-learning OR education )
)
```

**Variantes**

```
intrinsic extrinsic motivation dropout online learning
"mandatory training" engagement OR completion
Self-Determination Theory online course persistence
```

---

### #15 — Constancia / persistencia diseñable (scaffolding, safety, internalization, agents)

**Scopus** (ancha; después partir por mecanismo)

```
TITLE-ABS-KEY (
  ( persistence OR "self-regulated learning" OR consistency OR engagement OR "learning persistence" )
  AND (
    scaffolding OR "pedagogical agent" OR "psychological safety"
    OR internalization OR mastery OR "formative feedback"
  )
  AND ( education OR tutoring OR e-learning )
)
```

**Variantes por mecanismo**

```
scaffolding fade "self-regulated learning"
"psychological safety" classroom OR "learning environment" formative
"pedagogical agent" persistence OR engagement
mastery learning Bloom "formative assessment"
```

---

### #3 — Asociación / anclaje concreto (juego, metáfora) vs. abstracto

**Scopus**

```
TITLE-ABS-KEY (
  ( analog* OR "concrete example" OR metaphor OR "game-based" OR "grounded cognition" )
  AND ( programming OR "computer science" OR STEM OR "concept learning" )
  AND ( learning OR retention OR transfer OR understanding )
)
```

**Variantes**

```
analogical learning programming education
"concrete before abstract" mathematics OR programming
"game-based learning" Python OR programming retention
dual coding multimedia learning Mayer
```

---

### #4 — Presencia / compañía (agente, mascota, tutoría) vs. solo contenido

**Scopus**

```
TITLE-ABS-KEY (
  ( "pedagogical agent" OR "intelligent tutoring" OR "teaching presence" OR "social presence" OR "virtual companion" )
  AND ( engagement OR motivation OR persistence OR "learning outcomes" )
  AND ( education OR e-learning OR tutoring )
)
```

**Variantes (ACM / IEEE)**

```
pedagogical agent animated tutor engagement
"intelligent tutoring system" vs content-only OR textbook
"social presence" online learning community of inquiry
```

**Autores / líneas a vigilar:** Community of Inquiry (Garrison et al.); revisiones de pedagogical agents; ITS clásicos.

---

### #5 — Espacios habitables, interactividad, personalización → engagement

**Scopus**

```
TITLE-ABS-KEY (
  ( personalization OR personalisation OR interactivity OR "learner experience" OR "narrative learning" OR immersion )
  AND ( engagement OR motivation OR "sense of progress" OR presence )
  AND ( "learning environment" OR e-learning OR "educational technology" )
)
```

**Variantes**

```
"narrative learning environment" engagement
personalized learning dashboard motivation
"learner experience" design education
```

---

### #6 — Credenciales / certificados ≠ competencia real

**Scopus**

```
TITLE-ABS-KEY (
  ( credentialism OR microcredential* OR "digital badge" OR certificate OR certification )
  AND ( competence OR competency OR skill OR "signaling" OR employability )
  AND ( critique OR limitation OR "vs" OR mismatch OR validity )
)
```

**Variantes**

```
"credentialism" education signaling
MOOC completion learning outcomes skill
microcredentials competence critique
"theater of" OR "credential inflation"
```

---

### #7 — “Trabajar por trabajar” / crecimiento ≠ solo promoción

**Scopus**

```
TITLE-ABS-KEY (
  ( "meaningful work" OR "mastery orientation" OR "career growth" OR "job crafting" )
  AND ( promotion OR advancement OR "career development" OR performance )
  AND ( motivation OR learning OR skill OR competence )
)
```

**Variantes**

```
mastery vs performance goals Dweck OR Ames
"meaningful work" growth learning
career development skill vs promotion
```

*(Más org. psychology / education psychology que edtech.)*

---

### #8 — Progreso visible (mapa / grafo / mastery) → autorregulación / atajos

**Scopus**

```
TITLE-ABS-KEY (
  ( "open learner model" OR "knowledge tracing" OR "learning dashboard" OR "mastery grid" OR "concept map" )
  AND ( "self-regulated" OR metacognition OR navigation OR "learner control" OR reflection )
)
```

**Variantes**

```
"open learner model" visualization learning
knowledge tracing mastery progress
learning analytics dashboard self-regulation
```

---

### #9 — Evaluación por desempeño / dominio (no nota)

**Scopus**

```
TITLE-ABS-KEY (
  ( "mastery-based" OR "competency-based" OR "performance-based assessment" OR "mastery learning" )
  AND ( assessment OR evaluation OR grading )
  AND ( learning OR outcomes OR deeper OR "student learning" )
)
```

**Variantes**

```
mastery learning Bloom Keller
competency-based education assessment outcomes
"standards-based grading" learning
```

---

### #10 — Memoria selectiva de intereses / modelo a largo plazo sin historial completo

**Scopus**

```
TITLE-ABS-KEY (
  ( "user model" OR "learner model" OR "long-term user modeling" OR personalization )
  AND ( privacy OR "minimal data" OR interest OR preference OR "selective memory" )
  AND ( tutoring OR education OR recommender OR agent )
)
```

**Variantes**

```
long-term learner modeling tutoring
privacy-preserving personalization education
"user interest" model pedagogical agent
```

---

### #11 — Adaptar explicación / lenguaje al perfil sin perder rigor

**Scopus**

```
TITLE-ABS-KEY (
  ( "adaptive explanation" OR "adaptive instruction" OR scaffolding OR "dialogue tutor" OR "natural language" )
  AND ( tutoring OR ITS OR "intelligent tutoring" )
  AND ( comprehension OR understanding OR learning )
)
```

**Variantes**

```
adaptive explanation tutoring system
scaffolding dialogue ITS
personalized feedback programming tutor
```

---

### #12 — Worked examples / aprendizaje por el ejemplo → interiorización

**Scopus**

```
TITLE-ABS-KEY (
  ( "worked example*" OR "cognitive apprenticeship" OR "case-based learning" OR "example-based learning" )
  AND ( programming OR STEM OR "skill acquisition" OR expertise )
)
```

**Variantes**

```
worked examples Sweller cognitive load programming
cognitive apprenticeship Collins
example-based learning transfer
```

---

### #13 — Espacio seguro para errar + baja presión → menos trampa / mejor aprender

**Scopus**

```
TITLE-ABS-KEY (
  ( "psychological safety" OR "formative assessment" OR "safe to fail" OR "error climate" )
  AND ( cheating OR "academic integrity" OR learning OR engagement OR "help seeking" )
  AND ( education OR classroom OR online )
)
```

**Variantes**

```
psychological safety learning errors
formative assessment academic integrity
"fear of failure" cheating OR help-seeking
```

---

### #14 — Confianza en el tutor vs. vigilancia / proctoring

**Scopus**

```
TITLE-ABS-KEY (
  ( trust OR rapport OR "teacher-student relationship" OR "tutor relationship" )
  AND ( cheating OR "academic dishonesty" OR proctoring OR surveillance OR "academic integrity" )
  AND ( online OR tutoring OR education )
)
```

**Variantes**

```
online proctoring critique privacy learning
trust tutoring system academic integrity
surveillance "academic integrity" engagement
```

---

## 4. Queries por enfoques prioritarios de cita

Para anclar el diseño (no solo “afirmar un fenómeno”). Una buena **review** o un paper canónico basta al inicio.

### P1 — Mastery + open learner model

```
TITLE-ABS-KEY ( "open learner model" AND ( mastery OR visualization OR "self-regulated" ) )
```

```
TITLE-ABS-KEY ( "mastery learning" AND ( assessment OR tutoring OR "knowledge component" ) )
```

Scholar: `Bull "open learner model"` · `Bloom "Learning for Mastery"` · knowledge components / mastery grids.

### P2 — Scaffolding → autonomía

```
TITLE-ABS-KEY ( scaffolding AND ( fading OR fade OR autonomy OR "self-regulated learning" ) AND ( tutoring OR education ) )
```

Scholar: `Wood Bruner scaffolding` · `van de Pol scaffolding review` · ITS fading support.

### P3 — Presence + trust (compañía, espacio seguro)

```
TITLE-ABS-KEY ( ( "pedagogical agent" OR "social presence" OR "teaching presence" ) AND ( engagement OR trust OR motivation ) )
```

```
TITLE-ABS-KEY ( "psychological safety" AND ( learning OR classroom OR education ) )
```

Scholar: Community of Inquiry · pedagogical agents meta-analysis · trust in AI tutors (más reciente).

### P4 — Adaptive explanation

```
TITLE-ABS-KEY ( ( "adaptive explanation" OR "adaptive feedback" OR "personalized explanation" ) AND ( tutoring OR ITS OR education ) )
```

Scholar: adaptive hypermedia · dialogue-based ITS · explanation personalization.

---

## 5. Fuentes “semilla” típicas (para snowball, no cita ciega)

Úsalas como **entrada al mapa de citas**, luego verificá abstract y relevancia real:

| Tema | Pistas de entrada (buscar el paper / review, no citar de oídas) |
|------|------------------------------------------------------------------|
| Carga cognitiva / ejemplos | Sweller — cognitive load; worked examples |
| Mastery | Bloom — Learning for Mastery; Keller — Personalized System of Instruction |
| Scaffolding | Wood, Bruner & Ross; revisiones posteriores en classroom/ITS |
| Motivación | Self-Determination Theory (Deci & Ryan); goal orientation |
| Presencia online | Community of Inquiry (Garrison et al.) |
| Open learner models | Trabajos de Susan Bull y línea OLM |
| Agentes pedagógicos | Meta-análisis / reviews “pedagogical agents” en *Educational Technology Research & Development* / *Computers & Education* |
| ITS | Reviews de Intelligent Tutoring Systems (VanLehn y posteriores) |

---

## 6. Plantilla de captura (copiar por fuente)

```
Afirmación / enfoque #:
Query usada + motor:
Título:
Autores / año / venue:
DOI o URL:
¿Apoya / matiza / contradice?:
1 frase útil para el doc:
Limitaciones (población, dominio, año):
```

---

## 7. Orden sugerido esta semana / la próxima

1. **#1** sobrecarga + abandono (ancla el problema).  
2. **#3** asociación / concreto (tu ejemplo Java→juego).  
3. **#4** + **P3** presencia / agentes.  
4. **#15** / **P2** constancia vía scaffolding + feedback.  
5. **#8** + **P1** progreso visible / OLM / mastery.  
6. **#6** credenciales (contexto crítico).  
7. **#13–14** espacio seguro vs vigilancia (cuando escribas logro/anti-trampa).  
8. El resto (#2, #5, #7, #9–12) en saturación a lo largo del semestre.

---

## 8. Enlace al doc de problema

Lista de afirmaciones y enfoques: [`semana-02-problema.md`](semana-02-problema.md) → sección **Notas / pendientes**.
