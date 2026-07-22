# Slide Specification Plan: React Fundamentals 2024

## Destination & Objectives
- **Target Audience**: Estudiantes universitarios sin experiencia previa en React.
- **Target Slide Count**: 50
- **Output Files**:
  - Primary Deliverable: `slides/react-fundamentals/react-fundamentals.pdf`
  - HTML Canvas Medium: `slides/react-fundamentals/react-fundamentals.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**: JSX, Virtual DOM, Vite, Estructura basada en features, ESLint Flat Config, Hooks (useState, useEffect), React Router, y Estado Global (Context API / Zustand). Todo con JavaScript moderno (ES6+).
- **Out-of-Scope**: TypeScript (para no sobrecargar a los novatos), Server Components/Next.js, Testing avanzado.
- **Design Strategy**: Uso intensivo de **"Frames"** (diapositivas duplicadas con contenido progresivo) para evitar sobrecarga cognitiva. Uso de `sectionSlideE` con diagramas Mermaid a pantalla completa.

## Pedagogical Critique (Internal QA Pass)
- **Slides replaced during critique**: Ninguna por el momento.
- **Coverage gaps addressed**: Se añadió Zustand en lugar de Redux para simplificar la enseñanza de estado global a novatos.
- **Density issues resolved**: Se utilizarán frames explícitos (Slides múltiples) para revelar listas de características en lugar de poner 6 viñetas en una sola diapositiva.

## Slide-by-Slide Map (1..50)

### Módulo 1: Introducción a React y Virtual DOM
- **Slide 1**: `Introducción a React`
  - **Layout Function**: `icesi.titleSlideA('React Fundamentals 2024', 'Construyendo UIs Modernas')`
- **Slide 2**: `Capítulo 1`
  - **Layout Function**: `icesi.sectionSlideC('¿Qué es React y por qué usarlo?')`
- **Slide 3**: `El problema de Vanilla JS (Frame 1)`
  - **Layout Function**: `icesi.slideStandard('Manipulación del DOM Tradicional', 'Texto y snippet de JS clásico (document.createElement)')`
- **Slide 4**: `El problema de Vanilla JS (Frame 2)`
  - **Layout Function**: `icesi.slideStandard('Manipulación del DOM Tradicional', 'Texto, snippet, y explicación de lentitud en re-renders')`
- **Slide 5**: `La solución Reactiva (Frame 1)`
  - **Layout Function**: `icesi.slideSidebarLeftOrange('React al rescate', '1. Declarativo (Dices QUÉ, no CÓMO).', {type:'icons', items:[{icon:'[inline SVG: Declarative]', label:'Declarativo'}]})`
- **Slide 6**: `La solución Reactiva (Frame 2)`
  - **Layout Function**: `icesi.slideSidebarLeftOrange('React al rescate', '1. Declarativo\n2. Basado en Componentes.', {type:'icons', items:[{icon:'[inline SVG]', label:'Declarativo'}, {icon:'[inline SVG]', label:'Componentes'}]})`
- **Slide 7**: `Virtual DOM (Frame 1)`
  - **Layout Function**: `icesi.sectionSlideEBlue('Entendiendo el Virtual DOM', '<div class="mermaid">graph LR; A[Estado] --> B[DOM Virtual];</div>')`
- **Slide 8**: `Virtual DOM (Frame 2)`
  - **Layout Function**: `icesi.sectionSlideEBlue('Entendiendo el Virtual DOM', '<div class="mermaid">graph LR; A[Estado] --> B[DOM Virtual] --> C{Diffing};</div>')`
- **Slide 9**: `Virtual DOM (Frame 3)`
  - **Layout Function**: `icesi.sectionSlideEBlue('Entendiendo el Virtual DOM', '<div class="mermaid">graph LR; A[Estado] --> B[DOM Virtual] --> C{Diffing} --> D[Actualización eficiente del DOM Real];</div>')`
- **Slide 10**: `Resumen Módulo 1`
  - **Layout Function**: `icesi.slideStripeTopLeft('Resumen', 'React es una librería (no framework) declarativa, eficiente gracias al V-DOM, y basada en componentes.')`

### Módulo 2: Ecosistema Moderno (Vite y ESLint)
- **Slide 11**: `Capítulo 2`
  - **Layout Function**: `icesi.sectionSlideC('Herramientas: Vite y ESLint')`
- **Slide 12**: `¿Por qué Vite? (Frame 1)`
  - **Layout Function**: `icesi.slideTwoCols('Vite vs Create React App', 'CRA: Lento, obsoleto (Webpack).', '')`
- **Slide 13**: `¿Por qué Vite? (Frame 2)`
  - **Layout Function**: `icesi.slideTwoCols('Vite vs Create React App', 'CRA: Lento, obsoleto.', 'Vite: Rápido (Esbuild), HMR instantáneo.')`
- **Slide 14**: `Creando el proyecto`
  - **Layout Function**: `icesi.slideStandard('Inicialización', '`npm create vite@latest mi-app -- --template react`')`
- **Slide 15**: `Estructura de Carpetas (Frame 1)`
  - **Layout Function**: `icesi.slideSidebarLeftBlue('Organización Escalable', 'Mostrando `src/assets` y `src/components`', '')`
- **Slide 16**: `Estructura de Carpetas (Frame 2)`
  - **Layout Function**: `icesi.slideSidebarLeftBlue('Organización Escalable', 'Agregando `src/features` (Feature-based structure)', '')`
- **Slide 17**: `Estructura de Carpetas (Frame 3)`
  - **Layout Function**: `icesi.slideSidebarLeftBlue('Organización Escalable', 'Agregando `src/hooks` y `src/utils`', '')`
- **Slide 18**: `Calidad de Código: ESLint`
  - **Layout Function**: `icesi.sectionSlideE('Flat Config en 2024', 'El archivo `eslint.config.js` reemplaza a `.eslintrc`.')`
- **Slide 19**: `Configurando ESLint (Frame 1)`
  - **Layout Function**: `icesi.slideStandard('Flat Config', 'Snippet mostrando importación de rules.')`
- **Slide 20**: `Configurando ESLint (Frame 2)`
  - **Layout Function**: `icesi.slideStandard('Flat Config', 'Snippet mostrando rules de hooks (exhaustive-deps).')`

### Módulo 3: Componentes y JSX
- **Slide 21**: `Capítulo 3`
  - **Layout Function**: `icesi.sectionSlideC('JSX y Anatomía de un Componente')`
- **Slide 22**: `¿Qué es JSX? (Frame 1)`
  - **Layout Function**: `icesi.slideStandard('Sintaxis JSX', 'Parece HTML, pero es JavaScript. Regla 1: Retornar un solo elemento raíz.')`
- **Slide 23**: `¿Qué es JSX? (Frame 2)`
  - **Layout Function**: `icesi.slideStandard('Sintaxis JSX', 'Regla 1...\nRegla 2: Cerrar todas las etiquetas (`<img />`).')`
- **Slide 24**: `¿Qué es JSX? (Frame 3)`
  - **Layout Function**: `icesi.slideStandard('Sintaxis JSX', 'Regla 1...\nRegla 2...\nRegla 3: Usar camelCase para atributos (`className`, `onClick`).')`
- **Slide 25**: `Componentes Funcionales (Frame 1)`
  - **Layout Function**: `icesi.slideTwoCols('Tu primer componente', 'Snippet de una función sencilla', '')`
- **Slide 26**: `Componentes Funcionales (Frame 2)`
  - **Layout Function**: `icesi.slideTwoCols('Tu primer componente', 'Snippet de una función sencilla', 'Explicación del return y export default.')`
- **Slide 27**: `Árbol de Componentes`
  - **Layout Function**: `icesi.sectionSlideEYellow('Jerarquía', '<div class="mermaid">graph TD; App-->Header; App-->Main; Main-->Card1; Main-->Card2;</div>')`
- **Slide 28**: `Props (Frame 1)`
  - **Layout Function**: `icesi.slideSidebarLeftPurple('Pasando Datos', 'Props = Propiedades. Son argumentos de solo lectura.', '')`
- **Slide 29**: `Props (Frame 2)`
  - **Layout Function**: `icesi.slideSidebarLeftPurple('Pasando Datos', 'Props = ...\nEjemplo: `<Card title="Hola" />`', '')`
- **Slide 30**: `Prop drilling`
  - **Layout Function**: `icesi.sectionSlideEOrange('El problema del Prop Drilling', 'Pasar props por 5 niveles... (Diagrama SVG conceptual inline)')`

### Módulo 4: Hooks (Estado y Ciclo de Vida)
- **Slide 31**: `Capítulo 4`
  - **Layout Function**: `icesi.sectionSlideC('Hooks: Interactividad')`
- **Slide 32**: `¿Qué son los Hooks?`
  - **Layout Function**: `icesi.slideStandard('Reglas de Oro', '1. Solo llamarlos en el nivel superior.\n2. Solo llamarlos desde funciones React.')`
- **Slide 33**: `useState (Frame 1)`
  - **Layout Function**: `icesi.slideTwoCols('Manejando Estado', '`const [count] = useState(0);`', '')`
- **Slide 34**: `useState (Frame 2)`
  - **Layout Function**: `icesi.slideTwoCols('Manejando Estado', '`const [count, setCount] = useState(0);`', 'Explicación de desestructuración y función actualizadora.')`
- **Slide 35**: `useState (Frame 3)`
  - **Layout Function**: `icesi.slideTwoCols('Manejando Estado', 'Código completo con botón `onClick={() => setCount(c+1)}`', 'Al cambiar el estado, React re-renderiza el componente.')`
- **Slide 36**: `useEffect (Frame 1)`
  - **Layout Function**: `icesi.slideSidebarLeftBlue('Efectos Secundarios', 'Conectar a APIs, suscribirse a eventos.', '')`
- **Slide 37**: `useEffect (Frame 2)`
  - **Layout Function**: `icesi.slideSidebarLeftBlue('Efectos Secundarios', 'Sintaxis: `useEffect(() => { ... }, [])`', '')`
- **Slide 38**: `Arreglo de Dependencias (Frame 1)`
  - **Layout Function**: `icesi.slideStandard('Dependencias', 'Sin arreglo: Se ejecuta en cada render.')`
- **Slide 39**: `Arreglo de Dependencias (Frame 2)`
  - **Layout Function**: `icesi.slideStandard('Dependencias', 'Arreglo vacío `[]`: Se ejecuta solo al montar.\nArreglo `[data]`: Se ejecuta cuando `data` cambia.')`
- **Slide 40**: `Resumen Hooks`
  - **Layout Function**: `icesi.slideFourCards('Hooks Esenciales', 'useState', 'Estado local', 'useEffect', 'Efectos y montajes', 'useContext', 'Datos globales', 'Custom Hooks', 'Lógica reutilizable')`

### Módulo 5: Enrutamiento y Estado Global
- **Slide 41**: `Capítulo 5`
  - **Layout Function**: `icesi.sectionSlideC('Ecosistema Moderno')`
- **Slide 42**: `React Router (Frame 1)`
  - **Layout Function**: `icesi.slideStandard('Navegación SPA', 'Las Single Page Applications no recargan la página.')`
- **Slide 43**: `React Router (Frame 2)`
  - **Layout Function**: `icesi.slideStandard('Navegación SPA', 'Ejemplo de `createBrowserRouter` y `<RouterProvider>`.')`
- **Slide 44**: `Links y NavLinks (Frame 1)`
  - **Layout Function**: `icesi.slideTwoCols('Navegando', 'No uses `<a href="">` (recarga la página).', '')`
- **Slide 45**: `Links y NavLinks (Frame 2)`
  - **Layout Function**: `icesi.slideTwoCols('Navegando', 'No uses `<a>`.', 'Usa `<Link to="/">` para navegación puramente cliente.')`
- **Slide 46**: `Estado Global (Frame 1)`
  - **Layout Function**: `icesi.slideSidebarLeftOrange('Resolviendo el Prop Drilling', 'Opciones: Context API vs Redux vs Zustand', '')`
- **Slide 47**: `Estado Global (Frame 2)`
  - **Layout Function**: `icesi.slideSidebarLeftOrange('Context API', 'Integrado en React. Bueno para temas (Dark mode) o auth ligero.', '')`
- **Slide 48**: `Estado Global (Frame 3)`
  - **Layout Function**: `icesi.slideSidebarLeftOrange('Zustand', 'Librería externa, minimalista, sin boilerplate. El estándar moderno.', '')`
- **Slide 49**: `Ejemplo Zustand`
  - **Layout Function**: `icesi.slideStandard('Creando un Store', 'Snippet de `create((set) => ({...}))` de Zustand.')`
- **Slide 50**: `Fin`
  - **Layout Function**: `icesi.titleSlideF('¡Gracias!', 'Preguntas y Respuestas')`

## Handoff & Execution
Run `/implement-slides .agents/spec/slides-plan/react-fundamentals-plan.md` to generate the presentation slides and compile the final PDF file under `slides/react-fundamentals/react-fundamentals.pdf`.
