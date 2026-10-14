# Stitch Code — hallazgos (destripe)

> **Semana del camino:** 2026-09-28  
> **Fuente:** repositorio hermano `StitchCode` (45 commits, 30 may – 3 jun 2026, rama `main` sincronizada)  
> **Propósito:** recuperar las ideas iniciales del laboratorio y ver qué hay, qué falta y qué supuestos esconde frente a los aspectos del compañero (`/camino`).

---

## 1. Qué es, en una frase

Un entorno en el navegador para quien programa **por primera vez**, donde la premisa es **leer, entender y diagnosticar** antes de escribir más código, con un tutor (Hilo) que **guía sin reemplazar el razonamiento** y un lenguaje propio (Woven) pensado para enseñar.

Contexto: se presentó como trabajo de equipo (Juan Vergara, Nael Fontaine, Daniel Gracia; `docs/presentacion.html`), con demo en `vethariel.github.io/StitchCode`. Todo el historial de git está a nombre de Vethariel. Se construyó en cinco días: motor Woven los días 1–2, editor y Hilo del 2 al 3.

---

## 2. Ideas iniciales recuperadas

Lo que el proyecto dijo querer ser, antes de las piezas:

1. **Leer y diagnosticar antes que escribir.** Muchos estudiantes no fallan por falta de respuestas sino por no saber *mirar* un programa: confunden sintaxis con sentido.
2. **Rejido vs. tejido.** El código enredado y sin patrón («rejido») frente al código donde cada hilo tiene su lugar. Los errores son nudos mal atados; «deshilachar un error es el primer paso para volver a tejer con intención».
3. **Un tutor que guía, no que sustituye.** Los LLM que entregan la solución completa debilitan la depuración. Hilo «no regala la solución: te ayuda a ver el programa, línea a línea».
4. **Un lenguaje didáctico convergente.** Woven toma lo común de Python, Java y C++ (tipos obligatorios, `new` obligatorio, indentación significativa, `for` estilo C) para que lo aprendido sea transferible.
5. **Varias vistas del mismo programa:** texto, bloques y lenguaje natural («verboso»), más traducciones a tres lenguajes. La idea es bajar la barrera sin desconectar del código «real», que es la crítica a Scratch.
6. **Ejecución visible:** traza paso a paso con variables y grafo de estructuras.
7. **Errores legibles:** un error principal con ejemplo mínimo, no el traceback crudo de ANTLR.
8. **Logros como competencias, no como trámite.** Los logros describen qué se domina, no «completaste el reto».

Problema de partida (presentación): deserción y ansiedad en la introducción a la programación; herramientas pensadas para expertos; LLM que resuelven por el estudiante; falta un entorno que junte lenguaje didáctico, ejecución visible y tutoría acotada.

Referencias que usó: Resnick et al. 2009 (Scratch), VanLehn 2011 (efectividad de sistemas de tutoría), Guo 2013 (Online Python Tutor), Holland et al. 2019 (Codewitz), Parr 2013 (ANTLR).

---

## 3. Cómo evolucionó del prototipo al producto

Los prototipos de `refs/` muestran decisiones que cambiaron en el camino:

- **Logros:** el prototipo tenía insignias gamificadas («Primer hilo», «Maestro tejedor: completa 10 ejercicios sin errores»). El producto las reemplazó por **descripciones de dominio**, y un filtro borra frases como «completaste el ejercicio» (`learning-achievements.js`). Es la misma intuición que el norte actual: «progreso vivido, no simulado».
- **Nivel de ayuda:** en el prototipo el nivel se elegía a mano («Nivel 1» en la interfaz). En el producto avanza solo según la insistencia del estudiante.
- **Woven:** el prototipo usaba `fun`, `let` y `for i in 1..n` (cercano a Kotlin/Rust). El producto pasó a tipos explícitos y sintaxis convergente. Hoy el linter rechaza `let`, `var` y `def` con mensajes pedagógicos.

---

## 4. Destripe por pieza

### 4.1 Motor Woven (Python en el navegador vía Pyodide)

Gramática ANTLR4, intérprete (scopes, herencia, polimorfismo, listas tipadas), traductor a Python/Java/C++, tracer (eventos JSON), visitor verboso en español con su inverso y linter. Es la parte más sólida y probada (~274 tests con pytest).

**Capa pedagógica de errores** (`pedagogical_*.py`):
- Filtra errores en cascada hasta dejar **un error principal** y como máximo tres advertencias.
- Añade un **ejemplo mínimo** acorde al mensaje (declaración, índice, división por cero…).
- Explica errores típicos de quien viene de otro lenguaje: «En Woven no existe `def`…», «el constructor usa `init`…».

### 4.2 Editor y vistas

Tres vistas del mismo programa (texto, bloques, verboso), consola, linter en vivo, traza paso a paso y grafo de estructuras. Panel lateral con enunciado, traducciones y logros.

### 4.3 Hilo — el tutor

**Postura (system prompt de `gemini_agent.py`, presente desde el primer commit de Hilo):**
- «Tu meta no es dar respuestas sino guiar al estudiante a descubrirlas.»
- Usar siempre el programa abierto: líneas, variables y valores reales.
- **Cuatro niveles de ayuda:** orientación (pregunta) → pista (dónde, sin decir qué) → explicación (qué y por qué, sin código) → solución guiada (código corregido).
- **Estilo:** validar el esfuerzo antes de corregir, analogías antes que tecnicismos, no entregar código en los niveles 1–3, responder con una pregunta si piden la solución, celebrar brevemente y sugerir qué explorar después.
- **Adaptación a la vista:** en modo verboso, nada de sintaxis. Se habla de bloques por su texto y se asume que el estudiante no conoce ningún lenguaje.

**Perfil (onboarding):** tono (amigable, formal, motivador, paciente), estilo (paso a paso, analogías, directo, conceptual) y objetivos en texto libre. Se envía en cada turno como «obligatorio».

**Forma de hablar:** respuestas en JSON de 2 a 6 fragmentos cortos (máx. 120 caracteres) que se muestran uno a uno «como diálogo oral». Cada fragmento lleva una **emoción** del sprite, que elige el propio LLM entre 16 opciones (incluye `cry`, `sad`, `angry`).

**Poderes:** plan (4–8 actividades: aprendizaje, ejercicio libre, corrección/relleno y **reflexión** obligatoria), aprendizaje (ejemplo validado, explicación línea a línea, consola y comparación entre lenguajes), ejercicio (libre, corrección o relleno, con líneas bloqueadas), explicación con foco y resaltado, y paso a paso.

**Ingeniería de confianza en la IA:**
- La intención se detecta en el cliente con expresiones regulares (`hilo-intent.js`) antes de llamar a Gemini.
- El código que genera la IA se valida contra el linter, se sanea y se reintenta (`hilo-draft.js`).
- En corrección y relleno, un paquete único alinea enunciado, líneas editables y salida esperada, para que no aparezca una «línea 5 fantasma».
- `dominio_tema` es `null` si el modelo no aporta nada nuevo, para no inventar un logro.

### 4.4 Progreso y memoria: qué guarda y qué olvida

| Se guarda (`localStorage`) | Se pierde al cerrar |
|---|---|
| Perfil (tono, estilo, objetivos) | Historial del chat |
| Logros por tema (descripción + número de ejercicios) | Plan en curso y su avance |
| Tutorial completado, onboarding, clave de Gemini | Nivel de ayuda y conteo de intentos |

No hay perfil longitudinal: Hilo no recuerda al estudiante entre sesiones más allá del perfil declarado y los logros. El README lo reconoce como pendiente (persistencia del plan y memoria en servidor).

### 4.5 Calidad

339 tests (274 con pytest y 65 con Node). Las cuatro pruebas «estrella» protegen la experiencia en clase: error legible, `new` obligatorio, enunciado alineado y ningún logro falso. **No hubo evaluación con usuarios reales**; queda como trabajo futuro («vs. IDE o solo-chatbot»).

---

## 5. Cruce con los aspectos del compañero

Qué ofrece Stitch Code hoy para cada aspecto del camino y qué deja abierto.

| Aspecto | Qué hay en Stitch Code | Qué queda abierto |
|---|---|---|
| Lenguaje | Tono y estilo elegidos en el onboarding; analogías antes que tecnicismos; vista verbosa sin código | El nivel de lenguaje lo **declara** el usuario, no se infiere ni se ajusta con el uso; no usa las asociaciones propias del estudiante |
| Emoción / motivación | Validar el esfuerzo, celebrar, sprite con emociones | Las emociones las elige el LLM sin límites explícitos (`cry`, `angry`); no hay criterio de cuándo contener ni qué no prometer |
| Motivaciones diversas | Campo «objetivos» en texto libre | Se pasa al prompt, pero ningún mecanismo lo usa para elegir temas o ritmo |
| Entendimiento / retroalimentación | Cuatro niveles de ayuda; un error principal con ejemplo mínimo; explicación con foco | El nivel sube por **cantidad de mensajes** (más de 3), no por evidencia de entendimiento; no se diagnostica qué idea errónea hay detrás |
| Narrativa | Metáfora del tejido; plan con secuencia creciente | El plan es lineal y cerrado («no saltes actividades»); no contempla desvíos ni volver al temario desde la experiencia del estudiante |
| Memoria | Perfil y logros persisten | Nada de historial, plan ni dificultades entre sesiones; Hilo empieza de cero cada vez |
| Agencia | El estudiante pide los poderes por chat; el plan se genera a su pedido | Una vez dentro del plan, la secuencia la dicta Hilo |
| Metacognición | Actividad de «reflexión» obligatoria en cada plan; logros como descripción de competencias | La reflexión no tiene mecanismo propio (solo un mensaje); no se enseña a monitorear el propio progreso |
| Rol | Límites claros de tutor: no dar la solución, poderes acotados, ciertos poderes se desactivan en paso a paso | No hay límites sobre el terreno emocional o personal; el rol se define solo frente al código |

---

## 6. Supuestos y tensiones a revisar

1. **Insistir no es no entender.** Que la ayuda escale por número de mensajes supone que quien pregunta más está más atascado. Puede ser curiosidad, o puede que alguien atascado no pregunte.
2. **Un ejercicio basta para declarar «dominio».** Al completar un ejercicio, el logro queda en 100 % (`earned`). Eso choca con **interiorización**: dominar debería exigir transferencia y retención, no un acierto aislado.
3. **El LLM decide si el ejercicio está completo.** `ejercicio_completado` lo pone Gemini comparando con los criterios. Para corrección y relleno hay referencia validada; para el ejercicio libre no hay verificación determinista.
4. **Perfil declarado ≠ perfil real.** Elegir «paciente» o «analogías» en el onboarding es una preferencia inicial, no una adaptación. Tu pregunta de lenguaje (nivel cercano, no invasivo, sin tergiversar) apunta a algo que Stitch Code todavía no hace.
5. **La emoción como decoración.** El sprite da presencia, pero la emoción la elige el modelo en cada fragmento sin una política. Es justo la frontera que el aspecto de emoción quiere cuidar: motivar sin terapia ni promesas.
6. **Alcance del laboratorio.** Stitch Code es para universitarios en su primer contacto con programación. El compañero Stitch aspira a aprendizaje autónomo en general. Lo que se valide aquí tendrá que distinguir qué es del dominio (programación) y qué es del acompañamiento.
7. **Sin evidencia con usuarios.** Todo lo pedagógico está diseñado, no observado. Los tests protegen el comportamiento del software, no el aprendizaje.

---

## 7. Qué recuperar para el camino

Ideas del laboratorio que ya encajan con el norte y conviene conservar:

- **Diagnosticar antes de producir**, como postura del compañero y no solo del editor.
- **Ayuda graduada** (pregunta → pista → explicación → solución), cambiando el criterio de avance de «cuántos mensajes» a «qué evidencia de entendimiento».
- **Un error a la vez, con ejemplo mínimo**: retroalimentación acotada que no abruma.
- **Logros como descripción de competencias**, que ya rechazan el «completaste el reto».
- **Varias vistas del mismo contenido** (texto, bloques, lenguaje natural) como antecedente del ajuste de nivel de lenguaje.
- **La metáfora del tejido** como narrativa de fondo con huella propia.
- **Validar lo que genera la IA** antes de mostrarlo: condición para que el compañero no finja progreso.

## 8. Preguntas para esta semana

- ¿Qué señal observable, en lugar del conteo de mensajes, indicaría que el estudiante entendió o sigue atascado?
- ¿Qué tendría que pasar para que un logro signifique interiorización (repetición espaciada, transferencia a otro problema, explicar con sus palabras)?
- ¿Qué mínimo de memoria entre sesiones necesita el compañero para sostener la constancia (dificultades previas, plan a medias, asociaciones del estudiante)?
- ¿Cómo sería la reflexión de cierre como mecanismo real de metacognición y no como un mensaje más?
- ¿Qué política emocional necesita el sprite: qué emociones sí, cuándo, y qué nunca decir?
- ¿Qué del laboratorio es específico de programación y qué se puede llevar a cualquier dominio?
