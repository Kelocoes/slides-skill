# Slide Specification Plan: WebSockets en JavaScript

## Destination & Objectives
- **Target Audience**: Estudiantes Universitarios de Ingeniería de Sistemas / Desarrollo Web.
- **Target Slide Count**: 31 diapositivas.
- **Output Files**:
  - Primary Deliverable: `slides/websockets/websockets.pdf`
  - HTML Canvas Medium: `slides/websockets/websockets.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - Limitaciones de HTTP tradicional (Request/Response, Overhead, Stateless).
  - Evolución: Short Polling vs Long Polling vs Server-Sent Events vs WebSockets.
  - Protocolo RFC 6455 (`ws://` y `wss://`), Handshake (HTTP Upgrade 101).
  - API Native WebSocket en Navegadores JS (`open`, `message`, `error`, `close`).
  - Desarrollo de Cliente JS en cuadros incrementales ("frames").
  - Desarrollo de Servidor Node.js con `ws` en cuadros incrementales ("frames").
  - Patrón Broadcast, Heartbeat (Ping/Pong), Reconexión Exponencial.
  - Buenas Prácticas de Seguridad (WSS, Auth) y Comparativa con Socket.IO / SSE.
- **Out-of-Scope**:
  - Implementación interna de TCP en el Kernel del OS.
  - Protocolos de bajo nivel C/C++ o WebRTC data channels avanzados.

## Shared Assets Registry
- `slides/shared/http-vs-websocket.png`: Diagrama de Handshake 101 y canal bidireccional persistent.
- `slides/shared/websocket-architecture.png`: Comparativa de Short Polling, Long Polling y WebSockets.

## Pedagogical Critique (Internal QA Pass)
- All slides are 100% self-contained with zero external workshop/lab redirects.
- Code slides use incremental frame-by-frame building for step-by-step clarity.
- Emojis are strictly avoided — all icons are inline semantic SVGs.
- Visual diagrams from `slides/shared/` provide immediate structural clarity.

## Slide-by-Slide Map (1..31)

- **Slide 1**: WebSockets en JavaScript
  - Layout: `icesi.titleSlideA`
  - Arguments: `'WebSockets en JavaScript'`, `'Comunicación Bidireccional en Tiempo Real <br><span class="slide-footer-tag">Facultad de Ingeniería — Universidad Icesi</span>'`

- **Slide 2**: Introducción y Contexto
  - Layout: `icesi.sectionSlideEBlue`
  - Arguments: `'¿Por qué necesitamos WebSockets?'`, `'<p style="font-size:20px; color:#fff; text-align:center; margin-top:20px;">De la Web Estática a las Aplicaciones Reactivas en Tiempo Real</p>'`

- **Slide 3**: La Web Tradicional: HTTP Request-Response
  - Layout: `icesi.slideTwoCols`
  - Arguments: `'El Modelo Clásico HTTP'`, Column 1 (Modelo Unidireccional & Encabezados pesados), Column 2 (Casos de Uso Modernos que sufren con HTTP tradicional: Chat, Juegos, Trading).

- **Slide 4**: Evolución de las Técnicas de Comunicación Web
  - Layout: `icesi.slideThreeCols`
  - Arguments: `'Intentos Previos a WebSockets'`, Col 1 (Short Polling), Col 2 (Long Polling), Col 3 (Server-Sent Events - SSE).

- **Slide 5**: Diagrama Comparativo de Arquitecturas
  - Layout: `icesi.slideSidebarLeftBlue`
  - Arguments: `'Comparativa de Protocolos'`, Content with structured comparison list, `sidebarVisual: 'slides/shared/websocket-architecture.png'`.

- **Slide 6**: El Protocolo WebSocket
  - Layout: `icesi.sectionSlideEGreen`
  - Arguments: `'El Protocolo WebSocket (RFC 6455)'`, `'<p style="font-size:20px; color:#fff; text-align:center; margin-top:20px;">Conexión Persistente, Full-Duplex y de Baja Latencia</p>'`

- **Slide 7**: ¿Qué es WebSocket?
  - Layout: `icesi.slideSidebarLeftBlue`
  - Arguments: `'Fundamentos del Protocolo'`, Concept details, `sidebarVisual: { type: 'icons', items: [...] }`.

- **Slide 8**: El Proceso de Handshake (HTTP Upgrade 101)
  - Layout: `icesi.slideTwoCols`
  - Arguments: `'El Handshake de Inicialización'`, Col 1 (Petición Cliente GET con headers Upgrade: websocket), Col 2 (Respuesta Servidor 101 Switching Protocols).

- **Slide 9**: Ciclo de Vida de una Conexión WebSocket
  - Layout: `icesi.slideSidebarLeftOrange`
  - Arguments: `'Ciclo de Vida y Mensajería'`, Lifecycle explanations, `sidebarVisual: 'slides/shared/http-vs-websocket.png'`.

- **Slide 10**: API de WebSocket en el Navegador
  - Layout: `icesi.sectionSlideEYellow`
  - Arguments: `'WebSocket API en el Cliente'`, `'<p style="font-size:20px; color:#393939; text-align:center; margin-top:20px;">Eventos y Métodos Nativos en JavaScript</p>'`

- **Slide 11**: Los 4 Eventos Principales del Cliente
  - Layout: `icesi.slideFourCards`
  - Arguments: `'Eventos en la API del Cliente'`, Cards for `onopen`, `onmessage`, `onerror`, `onclose`.

- **Slide 12**: Métodos Clave y Estados del Socket
  - Layout: `icesi.slideTwoCols`
  - Arguments: `'Control del Socket en JS'`, Col 1 (Métodos `send()` y `close()`), Col 2 (Propiedad `readyState`: CONNECTING, OPEN, CLOSING, CLOSED).

- **Slide 13**: Desarrollo Paso a Paso: Cliente JS
  - Layout: `icesi.sectionSlideEOrange`
  - Arguments: `'Construyendo el Cliente JS (Frames)'`, `'<p style="font-size:20px; color:#fff; text-align:center; margin-top:20px;">Paso a Paso en Código Reutilizable</p>'`

- **Slide 14**: Cliente JS - Frame 1: Creación de la Conexión
  - Layout: `icesi.slideStandard`
  - Arguments: `'Cliente JS — Paso 1: Instanciación'`, Code snippet for opening WebSocket connection.

- **Slide 15**: Cliente JS - Frame 2: Envío de Datos al Conectar
  - Layout: `icesi.slideStandard`
  - Arguments: `'Cliente JS — Paso 2: Escuchar onopen'`, Incremental code snippet adding `ws.onopen` and sending initial JSON payload.

- **Slide 16**: Cliente JS - Frame 3: Recepción de Mensajes
  - Layout: `icesi.slideStandard`
  - Arguments: `'Cliente JS — Paso 3: Escuchar onmessage'`, Incremental code snippet adding `ws.onmessage` and parsing incoming message.

- **Slide 17**: Cliente JS - Frame 4: Manejo de Errores y Cierre
  - Layout: `icesi.slideStandard`
  - Arguments: `'Cliente JS — Paso 4: Manejo Completo'`, Full client code snippet with `onerror`, `onclose`, and cleanup.

- **Slide 18**: Servidor WebSocket en Node.js
  - Layout: `icesi.sectionSlideEBlue`
  - Arguments: `'Servidor WebSocket en Node.js'`, `'<p style="font-size:20px; color:#fff; text-align:center; margin-top:20px;">Implementación del Lado del Servidor con ws</p>'`

- **Slide 19**: El Ecosistema Node.js y la Librería `ws`
  - Layout: `icesi.slideSidebarLeftBlue`
  - Arguments: `'La Librería ws para Node.js'`, Explanation of high performance WS module in Node.js, `sidebarVisual: { type: 'icons', items: [...] }`.

- **Slide 20**: Desarrollo Paso a Paso: Servidor WS
  - Layout: `icesi.sectionSlideEOrange`
  - Arguments: `'Construyendo el Servidor WS (Frames)'`, `'<p style="font-size:20px; color:#fff; text-align:center; margin-top:20px;">Creación del Servidor WebSocket en Node.js</p>'`

- **Slide 21**: Servidor WS - Frame 1: Inicialización
  - Layout: `icesi.slideStandard`
  - Arguments: `'Servidor WS — Paso 1: Configuración'`, Code snippet instantiating `WebSocketServer`.

- **Slide 22**: Servidor WS - Frame 2: Conexión de Clientes
  - Layout: `icesi.slideStandard`
  - Arguments: `'Servidor WS — Paso 2: Evento connection'`, Code snippet listening for `'connection'` event.

- **Slide 23**: Servidor WS - Frame 3: Procesando Mensajes
  - Layout: `icesi.slideStandard`
  - Arguments: `'Servidor WS — Paso 3: Evento message'`, Code snippet listening for `'message'` on socket.

- **Slide 24**: Servidor WS - Frame 4: Patrón Broadcast
  - Layout: `icesi.slideStandard`
  - Arguments: `'Servidor WS — Paso 4: Patrón Broadcast'`, Code snippet broadcasting message to all `wss.clients`.

- **Slide 25**: Servidor WS - Frame 5: Heartbeat (Ping/Pong)
  - Layout: `icesi.slideStandard`
  - Arguments: `'Servidor WS — Paso 5: Heartbeat'`, Complete server code with ping/pong keep-alive checks.

- **Slide 26**: Patrones Avanzados y Producción
  - Layout: `icesi.sectionSlideEGreen`
  - Arguments: `'Patrones de Producción y Escalabilidad'`, `'<p style="font-size:20px; color:#fff; text-align:center; margin-top:20px;">Seguridad, Resiliencia y Rendimiento</p>'`

- **Slide 27**: Pilares de Producción en WebSockets
  - Layout: `icesi.slideFourCards`
  - Arguments: `'Pilares para Entornos de Producción'`, Cards for WSS/TLS, Reconnection Strategy, Heartbeats, Horizontal Scaling (Redis Pub/Sub).

- **Slide 28**: Estrategia de Reconexión Exponencial
  - Layout: `icesi.slideTwoCols`
  - Arguments: `'Reconexión Resiliente (Exponential Backoff)'`, Col 1 (El problema del "Thundering Herd"), Col 2 (Algoritmo de Backoff con Jitter en JS).

- **Slide 29**: Matriz de Decisión: WebSockets vs Socket.IO vs SSE
  - Layout: `icesi.slideThreeCols`
  - Arguments: `'¿Cuándo Usar Cada Tecnología?'`, Col 1 (Native WebSockets), Col 2 (Socket.IO), Col 3 (Server-Sent Events).

- **Slide 30**: Resumen y Cierre
  - Layout: `icesi.sectionSlideC`
  - Arguments: `'Resumen de Conceptos Clave'`

- **Slide 31**: Conclusiones y Preguntas
  - Layout: `icesi.slideSidebarLeftPurple`
  - Arguments: `'Conclusiones'`, Takeaway checklist for students, `sidebarVisual: { type: 'icons', items: [...] }`.
