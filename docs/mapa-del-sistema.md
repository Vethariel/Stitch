# Mapa del sistema — Proyecto Stitch

> **Documento de discusión con el docente** · visión del sistema, no cronograma  
> **Inicio:** 2026-09-01  
> **Estado:** idea general + preguntas por entidad (pedagógico primero)  
> **En el sitio:** [`/stitch`](/stitch), vía del modelo (antes `/mapa` y `/camino`); los temas del compañero viven en `src/data/companionThemes.ts`

---

## Para qué es

Cómo se vería el **sistema entero** cuando las piezas están en su lugar. No es el plan del semestre. Sirve para ver **relaciones**, no para describir cada pieza.

El mapa tiene que ser un **grafo**, sin texto descriptivo. De cada entidad salen **preguntas**; algunas pueden convertirse en **preguntas de investigación**. Este archivo documenta esa salida — no describe la pieza.

---

## Idea general

Un entorno donde una persona puede **aprender por su cuenta** con **significado** (vinculado a su propósito e intereses), **interacción** (presencia que sostiene el ritmo, no un menú frío) y **criterio honesto de avance** (poder hacer, no acumular credenciales vacías).

**Stitch** es el compañero — el agente de acompañamiento — no el sistema completo. Se piensa como un **anexo**: se acopla a cualquier sistema anfitrión que exponga ciertas herramientas (actividades verificables, errores legibles, ejecución observable, varias vistas) y le deje un espacio en la interfaz. **Stitch Code** es el primer anfitrión (ingeniería de software).

La pregunta que atraviesa el mapa:

> ¿Cómo diseñar un agente de acompañamiento que sostenga la constancia y la interiorización del aprendizaje autónomo, de modo que queden conocimiento y habilidades aplicables y el aprendizaje tenga sentido: se usa, se interioriza, y el progreso se siente vivido —no simulado?

No es un LMS, ni un marketplace de cursos, ni un certificado. El avance es poder hacer, con constancia sostenida.

---

## Método

1. Se nombra una entidad.
2. Se anotan las preguntas que esa entidad abre.
3. Cada pregunta se separa en **pedagógica** y **técnica**, con jerarquía:
   - **Primero lo pedagógico** — qué debe valer. Se **indaga**: leer, contrastar, afilar criterios y límites. El producto es claridad (efecto buscado, límite, qué contaría como avance).
   - **En técnicas, mientras tanto** — solo **hipótesis** frente a posturas ya evidenciadas (apuestas de operacionalización), no preguntas abiertas.
   - **Después lo técnico como pregunta** — cómo se operacionaliza. Se **investiga / propone** sobre la frontera de lo que ya existe. No se abre hasta que la pedagógica correspondiente tenga criterio suficiente.
4. Más adelante se decide cuáles se formalizan como preguntas de investigación.

Regla: no se abre una pregunta técnica hasta que la pedagógica diga, al menos, el **efecto buscado**, el **límite**, y qué contaría como **avance**.

No se describe la entidad. Las preguntas *son* lo que el mapa guarda de ella.

---

## Compañero (Stitch)

Hilo: nivel de lenguaje cercano (no invasivo) → vínculo → motivación intrínseca → constancia. La constancia no es otra pregunta: es el efecto buscado de ese hilo.

Por ahora las **pedagógicas** se indagan. En **técnicas** solo van **hipótesis** derivadas de las posturas ya evidenciadas — no preguntas abiertas todavía. Las preguntas técnicas se abren cuando la pedagógica tenga criterio suficiente y se mire la frontera.

### Pedagógicas

- **Lenguaje.** Antes de personalizar, hay que aclarar qué forma de lenguaje favorece la comunicación y qué efectos tiene. Apropiar mal el contexto social del estudiante produce rechazo; un registro cercano pero no invasivo puede ayudar a vincular. ¿Cómo emplear niveles de lenguaje y asociaciones del estudiante sin tergiversar la información del dominio?
- **Emoción / motivación intrínseca.** Un lenguaje cercano (no invasivo) busca un vínculo que sostenga el aprendizaje en el tiempo; sin ese sostén, la constancia se quiebra. Pero un compañero que “entra” demasiado en lo personal deja de ser educativo y se vuelve invasivo o cuasi-terapéutico. ¿Cómo construir motivación intrínseca que sostenga la constancia, y hasta dónde puede llegar ese acompañamiento sin invadir la vida personal ni asumir un rol de psicología?
- **Motivaciones diversas.** No todos llegan igual: quien quiere dominar la técnica y quien está obligado a aprenderla necesitan acompañamientos distintos. Si el agente trata a todos igual, o solo refuerza la motivación extrínseca (obligación, nota, premio), no construye el hábito que Stitch busca. ¿Qué implica el tipo de motivación predominante para el acompañamiento, y cómo se gestiona desde ahí la construcción de motivación intrínseca?
- **Entendimiento / retroalimentación.** Sin una lectura del estado del estudiante, el feedback es genérico: no distingue laguna, idea errónea ni malentendido puntual. La idea es que el compañero primero compruebe qué se entendió, y luego elija cómo explicar —con estrategias previstas según el perfil, no improvisando cada turno. ¿Qué cuenta como evidencia de entendimiento, laguna o idea errónea, y qué tipo de retroalimentación corresponde según ese perfil?
- **Narrativa.** Hay un temario y rutas sugeridas, no una secuencia única. El estudiante puede desviarse o necesitar un tema “posterior” antes, porque encaja con lo que ya sabe; el riesgo es perder el hilo curricular o volver al plan a la fuerza. ¿Cuándo permitir un desvío, cuándo adelantar un tema por cercanía con la experiencia previa, y cómo reentrar al temario sin que el paso sea forzoso?
- **Memoria.** Para que el estudiante sienta que hay compañía de un encuentro a otro, el compañero necesita recordar algo. ¿Qué es lo mínimo que debe recordar (y qué no debe guardar) para sostener esa continuidad sin comprometer la privacidad?
- **Agencia.** El compañero existe para acompañar, no para hacer el trabajo por el estudiante. Demasiada ayuda quita agencia; poca ayuda deja solo al novato. ¿Hasta dónde ayudar sin sustituir al estudiante, y cómo retirar el apoyo (pista → andamiaje → explicación) a medida que aumenta el entendimiento?
- **Metacognición.** Muchos estudiantes no traen experiencia en armar estrategias para monitorear su propio progreso (qué saben, qué falta, qué conviene hacer después). Si el compañero solo “ayuda en la tarea”, no forma esa capacidad; si impone un sistema rígido de autoevaluación, puede chocar con la agencia y con el horizonte de aprendiz de por vida. ¿Cómo enseñar a hacer seguimiento del propio aprendizaje a quien no ha practicado esas estrategias, sin sustituir su juicio ni reducir el acompañamiento a checklist?
- **Rol.** Un agente conversacional puede desbordarse: aconsejar la vida, juzgar, sustituir al docente o motivar con puntos y rachas. Stitch necesita un borde claro de lo que no hace. ¿Qué queda fuera del rol del compañero, y cómo se reconoce ese límite en la práctica?

### Técnicas (hipótesis frente a posturas ya evidenciadas)

No son preguntas abiertas. Son apuestas de operacionalización que siguen de lo pedagógico ya dicho; se contrastarán con la frontera cuando toque.

- **Lenguaje.** El agente ajusta nivel de lenguaje y asociaciones del estudiante (cercano, no invasivo). Tope duro: no alterar la verdad del dominio. Si la personalización exige tergiversar —o produce rechazo por apropiación errónea del contexto—, se prioriza fidelidad y un registro menos invasivo.
- **Emoción / motivación intrínseca.** El vínculo se construye por un nivel de lenguaje cercano (no invasivo) y por presencia educativa (ritmo, retorno, clima de error permitido), no por consejo de vida ni intervención psicológica. El efecto buscado es constancia vía motivación intrínseca.
- **Motivaciones diversas.** El agente detecta o asume un tipo predominante (p. ej. interés fuerte vs. obligación) y ajusta tono, exigencia y tipo de sostén; en todos los casos el horizonte es construir motivación intrínseca, no sostener solo la extrínseca.
- **Entendimiento / retroalimentación.** Primero se obtiene una lectura del entendimiento (lagunas, ideas erróneas, malentendidos); luego se elige una estrategia de un repertorio definido según el perfil — no improvisación libre en cada turno.
- **Narrativa.** Temario + rutas sugeridas como grafo, no lista rígida. Desvío permitido; reentrada al plan sin salto forzoso; adelantar un tema posterior es válido cuando la experiencia previa lo hace más efectivo.
- **Memoria.** Solo se guarda lo mínimo para continuidad entre encuentros (p. ej. intereses, preferencias, estado del recorrido); no el historial completo de conversación. Privacidad primero.
- **Agencia.** Ayuda graduada (pista → andamiaje → explicación) con retirada progresiva (*fading*); el compañero no resuelve por el estudiante.
- **Metacognición.** Se modelan y practican estrategias de monitoreo (qué sé, qué falta, qué sigue) de forma progresiva y situada en el dominio; el compañero andamia la metacognición al inicio y la retira para que el estudiante la interne — coherente con agencia y con la postura de aprendiz de por vida, no con un protocolo rígido de autoevaluación.
- **Rol.** Filtros / rechazo explícito de acciones fuera de rol: asesor de vida, juez, sustituto del docente, gamificación por puntos/rachas como motor.

Pendiente de este nodo (también después): comportamiento en prueba / ayuda mínima, cuando entre el evaluador.

Otras entidades: después.
