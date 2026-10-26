# 00 · Estructura de la investigación

> Registra las decisiones sobre cómo se organiza Stitch como investigación. Los demás documentos (`01-marco.md`, `02-lecturas.md`, …) parten de aquí.
> Cada sección deja un espacio de **Comentarios**.

Fecha: 2026-10-26.

## 1. Decisiones tomadas

1. **Seis etapas en cadena**, con la forma de un solo documento. El documento es lineal; la investigación es cíclica: la evaluación devuelve cambios al modelo y, a veces, a los marcos.
2. **Dos marcos:** uno de acompañamiento, sin IA, y otro de IA.
3. **La evidencia empírica pesa más** que la neurociencia. La neurociencia entra solo donde coincide con la evidencia conductual.
4. **Los trabajos relacionados van después de los marcos,** para compararlos con sus criterios.
5. **El modelo se escribe como *conjecture mapping*** (Sandoval, 2014): cada conjetura nace con su medida.
6. **Hilos:** cada hilo es un tema y termina en un paper puntual. Un hilo corresponde a una maestría; varios, a un doctorado.
7. **El hilo de la maestría queda pendiente.** Se decide cuando el macroproyecto esté más pulido y se pueda ver cuál es el hilo fundacional.
8. **La gestión emocional es un eje transversal del marco de acompañamiento,** por desarrollar (sección 5).
9. **Visión del macroproyecto:** lograr efectos e impactos reales en el aprendizaje, apoyándose fuertemente en la gestión emocional, mediante iteraciones continuas y no lineales probadas en la realidad.

**Comentarios:**

> 

## 2. Las etapas

| # | Etapa | Qué contiene | Qué no contiene | Estado en el repositorio |
|---|---|---|---|---|
| 1 | **Problema** | Evidencia de que el problema existe: abandono, falta de acompañamiento, credenciales frente a uso, progreso simulado. Incluye el riesgo de la IA como parte del problema (rendición cognitiva, pereza metacognitiva) | Soluciones | `/problema` (`problema.astro`). Las cuatro fallas están; la evidencia de la mitad *constancia* es débil (ver `01-marco.md`) |
| 2a | **Marco de acompañamiento** | Principios de pedagogía y psicología sobre qué es un buen acompañamiento, independientes de la tecnología | Mecanismos de diseño; cualquier cosa sobre IA | Marco v1: nueve reglas en `framework.ts`. Hay que separar los mecanismos mezclados en las reglas (ver `01-marco.md`) |
| 2b | **Marco de IA** | Cómo aprende y razona la gente con una IA, sin importar el sistema: falibilidad fluida, delegar frente a rendirse, pereza metacognitiva, complacencia, calibración de la confianza, explicaciones siempre disponibles | Sistemas concretos y sus resultados | **No existe.** Fuentes iniciales: Shaw y Nave, Dizon et al. (ver `02-lecturas.md`) |
| 3 | **Trabajos relacionados** | Sistemas existentes (tutores inteligentes, agentes pedagógicos, tutores con IA) comparados contra los criterios de ambos marcos. El hueco que ninguno cubre justifica el modelo | Teoría general | **No existe.** Candidatos: Bastani et al., Kestin et al., tutores cognitivos, AutoTutor |
| 4 | **Modelo** | El cruce de ambos marcos: qué principios de acompañamiento se sostienen, se adaptan o se rompen cuando quien acompaña es una IA. Escrito como mapa de conjeturas (sección 3) | Implementación concreta | Hay **dos modelos**: los aspectos de `companionThemes.ts`, visibles, y `model` por regla en `framework.ts`, oculto. Hay que unificarlos |
| 5 | **Sistema** | La encarnación del modelo en un anfitrión. El primero es Stitch Code; otros anfitriones, a futuro, para probar versatilidad | Decisiones de teoría | `stitch.ts` y `/stitch/sistema`: once piezas y doce tensiones con el modelo. Sin evaluación con usuarios |
| 6 | **Evaluación** | Pruebas con personas reales, análisis y conclusiones para la siguiente iteración. Mide lo que el modelo definió, no lo que sea fácil medir | — | **No existe** |

**Comentarios:**

> 

## 3. Forma del modelo: mapa de conjeturas

Cada conjetura del modelo se escribe con esta cadena:

```
Encarnación ──(conjetura de diseño)──→ Proceso mediador ──(conjetura teórica)──→ Resultado
 (sistema)                              (observable)                            (medible)
```

| Campo | Pregunta | Ejemplo |
|---|---|---|
| **Principio de origen** | ¿De qué regla de cada marco viene? | Acompañamiento R5 (feedback); IA: las explicaciones disponibles anulan la autoexplicación |
| **Encarnación** | ¿Qué hace el sistema? Herramientas, estructura de la tarea, quién hace qué, cómo se habla | El compañero pide un intento antes de explicar |
| **Conjetura de diseño** | Si el sistema hace eso, ¿qué hará el estudiante? | El estudiante se autoexplica antes de recibir explicación |
| **Proceso mediador** | ¿Cómo se observa? | Registros: proporción de turnos con explicación propia |
| **Conjetura teórica** | Si el estudiante hace eso, ¿qué resultado se produce? | Mejor transferencia |
| **Resultado y medida** | ¿Cómo se mide? | Desempeño sin ayuda a una semana |
| **Estado de la evidencia** | ¿Lectura, interpretación, intuición o decisión? | Conjetura teórica: lectura (Dunlosky). Conjetura de diseño: intuición |

Cuando un resultado no llega, el mapa dice dónde se rompió la cadena:
- **Si el proceso no ocurrió,** falló la conjetura de diseño y se corrige el sistema.
- **Si el proceso ocurrió pero el resultado no,** falló la conjetura teórica y se revisa el modelo o el marco.

**Comentarios:**

> 

## 4. Hilos

- **Un hilo es un tema y termina en un paper.** La pregunta debe ser estrecha.
- **Tronco común:** el problema, los dos marcos y los trabajos relacionados se escriben una vez y los citan todos los hilos.
- **Corte vertical:** cada hilo toma su parte de los marcos y la lleva por el modelo, el sistema y la evaluación.
- **Lo demás queda fijo.** Al evaluar un hilo, las piezas de los otros hilos no cambian en el sistema; si no, el efecto no se puede atribuir.

**Hilos candidatos.** Salen de los aspectos actuales del modelo; la lista no está cerrada:

| Hilo candidato | Aspecto actual del modelo |
|---|---|
| Retroalimentación y verificación del entendimiento | Entendimiento / retroalimentación |
| Ayuda graduada y agencia | Agencia |
| Metacognición | Metacognición |
| Lenguaje y personalización | Lenguaje |
| Memoria y continuidad | Memoria |
| Narrativa y recorrido | Narrativa |
| Motivación y vínculo | Emoción / motivación; Motivaciones diversas |

*Rol* no es un hilo: es un límite que aplica a todos.

**Hilo de la maestría:** pendiente. Se decide cuando el macroproyecto esté más pulido y se vea cuál es el hilo fundacional, es decir, aquel del que dependen los demás.

**Comentarios:**

> 

## 5. Componente por desarrollar: gestión emocional

**Estado:** por desarrollar. Por ahora solo se registra su definición y su lugar en la estructura.

**Definición:** todo lo que interviene en gestionar la narrativa del aprendizaje para que el proceso dure más y sea más efectivo. Incluye:
- la regulación de las emociones al aprender (frustración, confusión, miedo a equivocarse);
- el vínculo con el compañero;
- la lectura del estado del estudiante para ajustar la ayuda;
- el progreso que se siente vivido y el sentido de lo que se aprende.

**Lugar en la estructura:** es un eje transversal del marco de acompañamiento, no un aspecto más del modelo. Hoy está disperso en:

| Dónde | Qué hay |
|---|---|
| Norte | Principios «Progreso vivido» y «Sentido propio» |
| Marco | R7 (compañía con memoria) y R8 (espacio seguro) |
| Modelo | Aspectos *Narrativa*, *Emoción / motivación*, *Motivaciones diversas*, *Lenguaje* y *Memoria* |
| Sistema | Pieza `presencia` (expresiones del sprite) |

**Literatura que falta** (de memoria, sin verificar):
- **A favor:**
  - Pekrun, teoría de control-valor de las emociones del logro;
  - D'Mello y Graesser, la confusión y la dinámica del afecto;
  - Arroyo, Woolf y colegas, compañeros afectivos en tutores;
  - Hidi y Renninger, desarrollo del interés;
  - Lester, Mott y Rowe, entornos centrados en narrativa.
- **En contra o con límites:**
  - Harp y Mayer, los «detalles seductores»;
  - Adams et al. (2012), la narrativa en juegos educativos no mejoró el aprendizaje;
  - la poca fiabilidad de la detección automática de emociones.

**Qué tendrá que demostrar:** que la narrativa y la gestión emocional prolongan el proceso y lo hacen más efectivo sin quitarle atención al aprendizaje.

**Comentarios:**

> 

## 6. Qué cambia en lo que ya existe

| Pieza | Cambio pendiente |
|---|---|
| `01-marco.md` | Pasa a ser el documento del **marco de acompañamiento**. Las reglas que mezclan mecanismos se separan; los mecanismos van al modelo |
| `02-lecturas.md` | Sus hallazgos se reparten: el riesgo de la IA va al problema, los fenómenos de la IA al marco de IA y los tutores a trabajos relacionados |
| `versiones.json` | El versionado `marco.modelo.sistema` no contempla el marco de IA, los trabajos relacionados ni la evaluación. Decidir si se amplía |
| Sitio | Faltan páginas, o secciones, para el marco de IA, los trabajos relacionados y la evaluación |

**Comentarios:**

> 
