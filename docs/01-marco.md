# 01 · Marco — estado actual

> Documento de trabajo para la sincronización marco ↔ modelo ↔ sistema.
> Registra el marco **tal como está hoy en el repositorio** (versión 1.1.1, marco v1) y separa lo que tiene respaldo en lecturas de lo que sigue siendo intuición.
> No propone cambios: cada punto deja un espacio de **Comentarios** para decidir.

Fecha: 2026-10-26 · Fuentes revisadas: `src/data/framework.ts`, `src/data/versiones.json`, `src/data/papers.ts`, `src/data/stitch.ts`, `src/pages/problema.astro`.

## Cómo leer este documento

Cada afirmación de una regla se clasifica en uno de cuatro estados:

| Estado | Significa |
|---|---|
| **Lectura** | Lo dice una lectura fichada en `papers.ts` (el apunte de la ficha lo recoge). |
| **Interpretación** | Se apoya en una lectura, pero el salto a Stitch es propio: la lectura no lo dice así. |
| **Intuición** | Viene de las hipótesis del problema (`"problema"` en `sources`) o de la experiencia; ninguna lectura lo sostiene todavía. |
| **Decisión** | Es una elección de alcance o de postura; no necesita evidencia, necesita ser explícita. |

La clasificación se hizo contra **lo que dicen las fichas** de `papers.ts`, no contra los textos originales.

---

## 1. Qué es el marco hoy

**Definición vigente** (`vias` en `versiones.ts`): «Criterios y límites del compañero: qué cuenta como progreso, qué no se negocia y qué queda fuera de alcance.»

**Postura** (`frameworkStance.marco`): «No es el marco de todo el sistema — es el del acompañamiento.»

**Relación con las otras vías** (`frameworkStance.relacion`): una regla del marco se concreta en el modelo; el modelo se prueba en el sistema. Si el sistema muestra una falla, se ajusta el modelo o se afila la regla.

**Versión** (`versiones.json`): marco v1, «Borrador del marco», fechado 2026-08-26, vigente desde la fase 1.1.1 (2026-10-14). Resumen: «Nueve reglas del compañero desde las hipótesis del problema y las lecturas fichadas (NRC caps. 1–3, Hattie y Timperley, Carless y Boud, Dunlosky).»

**Pregunta de investigación** (`frameworkQuestion`, se muestra en `/` y `/problema`):

> ¿Cómo diseñar un agente de acompañamiento que sostenga la constancia y la interiorización del aprendizaje autónomo, de modo que queden conocimiento y habilidades aplicables y el aprendizaje tenga sentido: se usa, se interioriza, y el progreso se siente vivido —no simulado?

**Comentarios:**

> 

---

## 2. Alcance

Hay **dos versiones del alcance** y no coinciden:

| | `frameworkScope` (framework.ts) — **no se muestra en el sitio** | Recorte en `/problema` (`recorteSi` / `recorteNo`) — **sí se muestra** |
|---|---|---|
| **Incluye** | Dominios técnicos; laboratorio: programación (Stitch Code) | Igual, nombra Woven + Hilo |
| | Quien quiere dominar y quien está obligado | Igual |
| | Acompañamiento que sostiene constancia e interiorización; no sustituye al docente | Igual, añade «progreso vivido» |
| | Criterio de avance sin nota ni credencial vacía | Igual |
| | Énfasis práctico + preguntas del agente | — *(no aparece)* |
| **Excluye** | Plataforma de certificados / LMS | Igual |
| | Evaluación masiva | Igual |
| | Asistente general de vida | Igual, añade «rol terapéutico» |
| | Comunidad de aprendizaje como producto (horizonte) | — *(no aparece)* |
| | Coronar «experto»; se prefiere novato logrado | — *(no aparece)* |
| | — | Macro de carrera / narrativa multi-curso (horizonte) |
| | — | Lanzar Stitch Code como producto comercial sin el marco |

Estado: todo el alcance es **Decisión**.

**Comentarios:**

> 

---

## 3. Las nueve reglas

Para cada regla: el texto vigente, el modelo asociado que guarda `framework.ts` (que **no se muestra en el sitio**; en `/stitch/modelo` se muestran los aspectos de `companionThemes.ts`), las conexiones vigentes hacia el modelo y la separación entre información e intuición.

### R1 · Progreso sin nota vacía (`progreso-sin-nota`)

**Regla:** El avance se gana con evidencia de poder hacer frente a un criterio acordado, no con calificación ni credencial vacía.

**Fuentes declaradas:** problema · Hattie y Timperley · NRC

**Modelo guardado en framework.ts:** Grafo (mapa de conocimiento) y árbol (progreso) alineados; atajos solo tras prueba de desempeño. Piezas: nodos del grafo = verdad del dominio, árbol = recorrido visible; prueba de desempeño acordada con el estudiante antes de abrir avance; feedback de tarea/proceso/autorregulación.

**Se concreta en (modelo):** Narrativa · Entendimiento y feedback · Rol

| Afirmación | Estado | Base |
|---|---|---|
| Una nota o un correcto/incorrecto no cierra la brecha entre el estado actual y la meta | Lectura | Hattie y Timperley |
| Aprender con entendimiento se opone a memorizar | Lectura | NRC cap. 1 |
| El avance se gana con **evidencia de poder hacer** | Interpretación | NRC (transferencia) + Hattie; ninguna ficha propone un criterio de avance |
| El criterio es **acordado** con el estudiante | Intuición | Ninguna ficha; Carless y Boud (juicio evaluativo) podría apoyarlo, pero la ficha no lo dice |
| Grafo y árbol como espejos; atajos por prueba de desempeño | Intuición | Hipótesis «Árbol y grafo como espejos» en `/problema` |

**Observación:** la regla mezcla un criterio («evidencia de poder hacer») con un mecanismo («criterio acordado») que pertenece más al modelo.

**Comentarios:**

> 

### R2 · Aplicabilidad antes que memorización (`aplicabilidad`)

**Regla:** El criterio de buen uso es poder aplicar en situaciones nuevas (transferencia), no enunciar el concepto. La profundidad puede variar según la meta, pero no se cierra un tramo por fluidez superficial.

**Fuentes declaradas:** problema · NRC · Dunlosky

**Modelo guardado en framework.ts:** Problemas de reuso, condicionalización y multi-contexto; recuperación al servicio de usar. Piezas: «¿en qué situación usarías esto?»; ejemplos anclados a lo previo con variaciones de contexto; reencuentro en el grafo en lugar de calendario de flashcards; vigilancia de transferencia negativa.

**Se concreta en (modelo):** Agencia · Metacognición · Entendimiento y feedback

| Afirmación | Estado | Base |
|---|---|---|
| Transferencia como capacidad central; un solo contexto la limita | Lectura | NRC cap. 3 |
| Sin condicionalización (cuándo aplica) el conocimiento queda inerte | Lectura | NRC cap. 2 |
| Transferencia negativa y cómo prevenirla | Lectura | NRC cap. 3 |
| La profundidad varía según la meta | Intuición | Reflexión propia en la ficha NRC |
| Reencuentro en el grafo **en lugar de** práctica espaciada clásica | Interpretación | Dunlosky dice lo contrario en lo literal: espaciar y recuperar son las técnicas de mayor utilidad. Reinterpretarlas como «reencuentro integrado» es propio y no está probado |

**Observación:** Dunlosky está citado como fuente, pero la regla y su modelo se apoyan en él sobre todo para tomar distancia. Hoy funciona más como contrapunto que como respaldo.

**Comentarios:**

> 

### R3 · Conocimiento previo e ideas erróneas (`previo-y-errores`)

**Regla:** Nadie llega en blanco. Hay que mapear lo que ya se sabe y detectar ideas erróneas a lo largo de la formación, no solo al inicio.

**Fuentes declaradas:** NRC · problema

**Modelo guardado en framework.ts:** Diagnóstico conversacional continuo y modelo de dificultades típicas del dominio. Piezas: mapa inicial de lo conocido; preguntas que comprueban anclaje; biblioteca de ideas erróneas en Stitch Code; anclajes culturales y de interés.

**Se concreta en (modelo):** Entendimiento y feedback · Lenguaje

| Afirmación | Estado | Base |
|---|---|---|
| El aprendiz trae conocimientos previos que anclan o sostienen ideas erróneas | Lectura | NRC cap. 1 |
| Todo aprendizaje nuevo implica transferencia, incluso el inicial | Lectura | NRC cap. 3 |
| Enseñar exige conocer las dificultades típicas del estudiante | Lectura | NRC cap. 2 |
| Lo cultural es conocimiento previo | Lectura | NRC cap. 3 |
| Detectarlas **a lo largo** del recorrido, no solo al inicio | Interpretación | Se deriva de NRC, pero la ficha no lo dice así |
| Diagnóstico **conversacional** por el agente | Intuición | Ninguna ficha trata cómo diagnosticar con un agente |

**Observación:** es la regla con mejor respaldo. Lo que falta es evidencia sobre *cómo* detectar ideas erróneas en programación, en particular un catálogo de errores típicos de novatos.

**Comentarios:**

> 

### R4 · Organización mental y patrones (`organizacion-patrones`)

**Regla:** El aprendizaje debe dejar relaciones y patrones recuperables (principios, no trucos sueltos), sin pretender coronar expertise.

**Fuentes declaradas:** NRC

**Modelo guardado en framework.ts:** Grafo como espejo del modelo mental; explicación orientada a la idea grande; selectividad de qué se trae a cada problema. Piezas: nodos ligados; empujar al principio; traer un subconjunto relevante; andamiaje que libera atención.

**Se concreta en (modelo):** Narrativa · Entendimiento y feedback

| Afirmación | Estado | Base |
|---|---|---|
| Los expertos perciben patrones y organizan el conocimiento en torno a ideas grandes | Lectura | NRC cap. 2 |
| La recuperación fluida libera atención para usar | Lectura | NRC cap. 2 |
| Postura de «novato logrado» frente a coronar «experto» | Lectura | NRC cap. 2 |
| El grafo es un **espejo** del modelo mental | Intuición | Metáfora de diseño; ninguna ficha la respalda |

**Observación:** la regla se solapa con R2. Las dos hablan de principios y condicionalización: R2 desde el uso, R4 desde la organización.

**Comentarios:**

> 

### R5 · Ciclo de feedback con uptake (`ciclo-feedback`)

**Regla:** La retroalimentación debe ayudar a responder dónde voy, cómo voy y qué sigue, y el aprendiz debe poder tomarla y actuar. Sin base, se enseña; con malentendido, se retroalimenta.

**Fuentes declaradas:** Hattie y Timperley · Carless y Boud · NRC

**Modelo guardado en framework.ts:** Ciclo intento → información → interpretación → siguiente acción. Piezas: tres preguntas explícitas; niveles tarea/proceso/autorregulación; práctica más conversación como evaluación formativa; ejemplares como patrones; no saltar de nodo apenas hay un acierto.

**Se concreta en (modelo):** Entendimiento y feedback · Agencia

| Afirmación | Estado | Base |
|---|---|---|
| Tres preguntas: dónde voy, cómo voy, qué sigue | Lectura | Hattie y Timperley |
| Cuatro niveles; el nivel *self* es el más débil | Lectura | Hattie y Timperley |
| Sin base hace falta instrucción, no feedback | Lectura | Hattie y Timperley |
| El aprendiz debe poder tomar el feedback y actuar (uptake) | Lectura | Carless y Boud |
| Ejemplares como patrones, no como modelos a copiar | Lectura | Carless y Boud |
| No saltar a la siguiente actividad sin procesar el feedback | Lectura | Hattie y Timperley; Carless y Boud |

**Observación:** es la regla con mejor respaldo y la más directamente operable. Toda la evidencia viene de feedback de docentes a estudiantes; nada de lo fichado trata el feedback que da un agente de IA.

**Comentarios:**

> 

### R6 · Metacognición y agencia (`metacognicion-agencia`)

**Regla:** El estudiante guía la narrativa; el marco estructura. Hay que estimar y pulir la capacidad de monitorear el propio aprendizaje. Stitch es guía, no garantía de éxito.

**Fuentes declaradas:** NRC · Carless y Boud · problema

**Modelo guardado en framework.ts:** Diagnóstico metacognitivo inicial; estrategias según dominio; postura de novato logrado. Piezas: fase inicial de estado metacognitivo; preguntas de monitoreo; lagunas visibles en el grafo; no coronar «experto».

**Se concreta en (modelo):** Metacognición · Agencia

| Afirmación | Estado | Base |
|---|---|---|
| La metacognición es un eje del aprendizaje y depende del dominio | Lectura | NRC cap. 1 |
| El aprendiz es agente; las capacidades para usar el feedback se forman | Lectura | Carless y Boud |
| El estudiante **guía la narrativa** y el marco estructura | Intuición | Decisión de diseño sin respaldo en las fichas |
| Se puede **estimar** el estado metacognitivo al inicio | Intuición | Ninguna ficha trata cómo medirlo |
| Stitch es guía, no garantía | Decisión | Postura |

**Observación:** la regla junta tres cosas distintas: una postura (no garantía), una decisión de diseño (el estudiante guía) y un objetivo formativo (monitorear el propio aprendizaje). En el modelo, Agencia y Metacognición ya son dos aspectos separados.

**Comentarios:**

> 

### R7 · Compañía con memoria mínima (`compania-memoria`)

**Regla:** La presencia que sostiene constancia no exige historial completo. Privacidad primero; memoria selectiva de lo que basta para sentir acompañamiento.

**Fuentes declaradas:** solo problema

**Modelo guardado en framework.ts:** Intereses, preferencias y plantillas de personalidad; pregunta abierta sobre el mínimo de memoria. Piezas: perfil de intereses y tono; personalización sin alterar el núcleo; presencia orientada a ritmo y retorno.

**Se concreta en (modelo):** Memoria · Lenguaje · Emoción y motivación

| Afirmación | Estado | Base |
|---|---|---|
| Una **presencia** sostiene la constancia | Intuición | Hipótesis central del problema; ninguna lectura fichada la trata |
| Esa presencia no exige historial completo | Intuición | Hipótesis «Compañía sin historial completo» |
| Privacidad primero | Decisión | Postura |

**Observación:** esta regla carga la tesis central del proyecto (que el acompañamiento sostiene la constancia) y no tiene ninguna lectura detrás. Las cuatro lecturas fichadas tratan cómo se aprende (transferencia, feedback, técnicas), no por qué se abandona ni qué sostiene la persistencia.

**Comentarios:**

> 

### R8 · Espacio seguro y motivación (`espacio-seguro`)

**Regla:** Errar está permitido. No se sostiene el aprendizaje con recompensa extrínseca que sustituye información de tarea, ni con vigilancia que amenaza la identidad.

**Fuentes declaradas:** problema · Hattie y Timperley · NRC · Carless y Boud

**Modelo guardado en framework.ts:** Conversación sin prisa; pruebas acordadas; sin gamificación de puntos o rachas como motor. Piezas: clima que tolera el error; el diseño no castiga el intento; motivación alineada a interés y utilidad; confianza en lugar de proctoring.

**Se concreta en (modelo):** Emoción y motivación · Motivaciones diversas · Rol

| Afirmación | Estado | Base |
|---|---|---|
| Recompensas extrínsecas (puntos, premios) no son feedback y pueden minar la motivación intrínseca | Lectura | Hattie y Timperley, que recogen a Deci, Koestner y Ryan (1999) |
| Un entorno que no amenaza la identidad facilita recibir crítica | Lectura | Carless y Boud (gestión del afecto) |
| Las concepciones de inteligencia (fija o modificable) afectan el desempeño | Lectura | NRC cap. 1 |
| Errar está permitido / clima que tolera el error | Interpretación | Se deriva de Carless y NRC; ninguna ficha trata el clima de error en sí |
| La confianza desincentiva la trampa más que la vigilancia | Intuición | Ninguna ficha |

**Observación:** el título promete «motivación», pero la regla solo dice qué *no* motiva (recompensas extrínsecas, vigilancia). Qué construye motivación intrínseca queda sin regla ni respaldo; hoy vive como pregunta abierta en el aspecto *Emoción y motivación* del modelo.

**Comentarios:**

> 

### R9 · Alcance práctico del laboratorio (`alcance-practico`)

**Regla:** No hay método mágico de enseñanza. Stitch se acota a habilidades técnicas con énfasis práctico; la comunidad de aprendizaje queda como horizonte.

**Fuentes declaradas:** NRC · problema

**Modelo guardado en framework.ts:** Stitch Code como vehículo: práctica más diálogo. Piezas: tareas prácticas como vía principal; el agente pregunta para asegurar entendimiento; transformación vital y comunidad como horizonte.

**Se concreta en (modelo):** Rol · Agencia

| Afirmación | Estado | Base |
|---|---|---|
| No hay fórmula única para enseñar | Lectura | NRC cap. 1 |
| Acotar a habilidades técnicas con énfasis práctico | Decisión | Alcance |
| Comunidad como horizonte | Decisión | NRC la pone como **pilar**; dejarla fuera es una decisión consciente, en tensión con la lectura |

**Observación:** esta regla duplica el alcance (§2). No dice qué debe valer el compañero, sino dónde opera.

**Comentarios:**

> 

---

## 4. Resumen de respaldo

| Regla | Respaldo en lecturas | Lo que sigue siendo intuición |
|---|---|---|
| R1 Progreso sin nota | Parcial | Criterio acordado; grafo/árbol; atajos |
| R2 Aplicabilidad | Sólido (NRC) | Postura frente a Dunlosky |
| R3 Previo y errores | Sólido (NRC) | Diagnóstico por agente |
| R4 Organización y patrones | Sólido (NRC) | Grafo como espejo |
| R5 Ciclo de feedback | Sólido (Hattie; Carless) | Cómo lo hace un agente |
| R6 Metacognición y agencia | Parcial | El estudiante guía; medir metacognición |
| R7 Compañía con memoria | **Ninguno** | Toda la regla |
| R8 Espacio seguro | Parcial | Qué sí motiva; confianza frente a vigilancia |
| R9 Alcance práctico | No aplica (decisión) | — |

**Lectura de conjunto:** el marco está bien respaldado en la mitad *interiorización* de la pregunta de investigación (transferencia, conocimiento previo, feedback) y casi sin respaldo en la mitad *constancia* (abandono, persistencia, motivación, compañía). Es justo la mitad que da origen al proyecto.

**Comentarios:**

> 

---

## 5. Observaciones transversales

1. **Dos «modelos» en paralelo.** `framework.ts` guarda un modelo por regla (`model.summary` / `model.pieces`) que el sitio no muestra; el modelo visible es `companionThemes.ts` (nueve aspectos). Hay que decidir cuál es el modelo vigente antes de sincronizar el siguiente documento.
2. **Datos que no se muestran.** `frameworkScope` y todo `model` de las reglas no aparecen en el sitio, y el alcance que sí aparece (`/problema`) es distinto (§2).
3. **Reglas que mezclan niveles.** Varias reglas combinan un criterio (qué debe valer), un mecanismo (cómo, que es del modelo) y una postura. Pasa sobre todo en R1, R6 y R8.
4. **Solapamientos.** R2 y R4 (principios y condicionalización); R9 y el alcance; R8 y el aspecto *Rol* del modelo (no gamificar).
5. **Fuente «problema».** Seis de las nueve reglas citan `"problema"`, es decir, las hipótesis propias. Hoy cuenta como fuente al mismo nivel que una lectura; en el sitio no se muestra (solo se enlazan lecturas), así que en `/stitch/marco` la regla R7 muestra su literatura como «pendiente».
6. **Fechas del versionado.** Marco v1 está fechado el 2026-08-26 y el modelo v1 el 2026-09-09, pero ambos entran en la fase 1.1.1 del 2026-10-14, que es la única fase. No hay historial previo registrado.

**Comentarios:**

> 
