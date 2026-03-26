# 🪩 DecaDance - Frontend (MVP)

DecaDance es una aplicación web interactiva basada en un juego de cartas y líneas temporales musicales. Los jugadores deben adivinar el año de lanzamiento de diferentes canciones, retar a sus oponentes usando "púas" (vidas/intentos) y conseguir armar su línea temporal con 10 aciertos para ganar la partida.

Este repositorio contiene el **Frontend** desarrollado para ofrecer una experiencia de usuario inmersiva, con una estética visual Cyberpunk, gestión de estado en tiempo real y una arquitectura basada en componentes modulares.

🔗 **Repositorio del Backend:** [Back-DecaDance-PFI](https://github.com/AdaXana/Back-DecaDance-PFI)

---

## 🛠️ Tecnologías Utilizadas

El proyecto ha sido construido priorizando la escalabilidad de la interfaz, el rendimiento y la reutilización de código mediante la filosofía de Diseño Atómico (Atomic Design).

* **Librería Core:** React 18
* **Build Tool:** Vite
* **Enrutamiento:** React Router DOM (v6+)
* **Gestión de Estado y Auth:** Context API (`useAuth`)
* **Estilos:** CSS Modules + Variables Globales (Custom Properties)
* **Peticiones HTTP:** Axios / Fetch API

---

## ⚙️ Características Principales (MVP)

1.  **Sistema de Diseño Cyberpunk:** Interfaz 100% customizada (sin librerías de UI externas) utilizando variables CSS globales para gestionar temas oscuros, colores neón (Fucsia, Naranja, Cyan) y efectos visuales (`glow`, `glassmorphism`).
2.  **Arquitectura Atómica:** Componentes divididos lógicamente en Átomos (Botones, Iconos), Layouts (Header, Footer), Modales reutilizables y Páginas completas.
3.  **Flujo de Autenticación Protegido:** Gestión de sesiones mediante JWT, con rutas públicas y privadas (Dashboard de Usuario y Panel de Administración) aseguradas por un componente `<ProtectedRoute />`.
4.  **Panel de Administración (CRUD):** Interfaz dedicada para que los administradores gestionen el mazo de canciones con capacidades de edición en línea (In-place edit) y modales de confirmación seguras.
5.  **Fabricado con puro neón y componentes reutilizables.**

---

## 🚀 Requisitos y Configuración Local

Para levantar el entorno de desarrollo en tu máquina, necesitarás:
* Node.js (v18 o superior).
* npm o yarn como gestor de paquetes.
* El backend de DecaDance corriendo localmente (por defecto en el puerto `8080`).

### Pasos de Instalación:

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/AdaXana/Front-DecaDance-PFI.git](https://github.com/TU_USUARIO/Front-DecaDance-PFI.git)
   cd Front-DecaDance-PFI
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y enlaza la URL de tu backend local:
   ```env
   VITE_API_URL=http://localhost:8080/api/v1
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

---

## 🗺️ Mapa de Rutas (React Router)

La navegación está estructurada de la siguiente manera:

**Rutas Públicas:**
* `/` - Landing Page (Hero y reglas básicas).
* `/login` - Inicio de sesión.
* `/register` - Creación de cuenta.
* `/setup/:id` - Sala de espera / Configuración de jugadores (Host y Guests).
* `/game/:id` - Tablero principal de juego.
* `/endgame/:id` - Pantalla de victoria/derrota y estadísticas.

**Rutas Protegidas:**
* `/profile` - Panel de usuario (Estadísticas e historial de partidas).
* `/admin` - Panel de control exclusivo para roles `ADMIN` (Gestión del mazo de cartas).

---

## 🎨 Sistema de Modales Dinámicos

Para evitar la ruptura de la inmersión visual con alertas nativas del navegador (`window.confirm`), el proyecto implementa un sistema de modales dinámicos (`<AlertModal />`, `<MessageModal />`) controlados por estado. Estas modales adaptan su paleta de colores (ej. Rojo Neón para acciones destructivas, Fucsia para información) según las props que reciban, garantizando una UX coherente.

---

## 🔭 Próximas Implementaciones (Roadmap)

1. **Animaciones Fluidas:** Integración de bibliotecas como Framer Motion para la revelación del año en las cartas (efecto *flip*) y transiciones entre turnos.
2. **Drag & Drop:** Implementación de mecánicas de arrastrar y soltar para colocar las cartas de canciones directamente en la línea temporal.
3. **WebSockets:** Transición de validaciones manuales a actualizaciones en tiempo real para que todos los jugadores vean las acciones del oponente sin recargar o consultar constantemente al servidor.


-----------


## 📜 Reglas del Juego: DecaDance

DecaDance pone a prueba tu intuición y cultura musical. El objetivo es simple, pero el reto crece en cada turno: **ser el primer jugador en construir una línea temporal perfecta de 10 canciones ordenadas cronológicamente por su año de lanzamiento.**

### 🎯 Preparación de la Partida
* Pueden participar de **2 a 4 jugadores** (requiere al menos un Host registrado).
* Al iniciar, cada jugador recibe **una carta inicial** que se coloca en su tablero. Esta será la base de su línea temporal.
* Cada jugador comienza con un set de **"Púas"**, que representan sus vidas o comodines durante la partida.

### 🔄 Dinámica del Turno
1. **Robar y Escuchar:** Al inicio de tu turno, se revela una nueva carta de canción del mazo central (artista y título).
2. **Posicionar:** Debes adivinar en qué lugar de tu línea temporal encaja la nueva canción respecto a las que ya tienes. ¿Salió antes, después, o justo en medio?
3. **Revelación:** Una vez confirmada tu decisión, la carta se voltea para revelar su **año de lanzamiento**.
4. **Resolución:**
   * **¡Acierto!** La carta se añade a tu línea temporal. Estás un paso más cerca de la victoria.
   * **¡Fallo!** La carta se descarta. 

### 🎸 Uso de las Púas (Vidas/Retos)
Las Púas son el recurso estratégico del juego. Si fallas al colocar una carta o decides arriesgarte a retar el turno de un oponente, consumirás una púa. Si te quedas sin púas, estarás en desventaja en los momentos críticos de la partida.

### 🏆 Fin de la Partida
La tensión aumenta a medida que tu línea temporal crece (¡los huecos entre años son cada vez más estrechos!). El juego termina en el momento exacto en que un jugador logra colocar correctamente su **décima carta**. Ese jugador es coronado como el maestro absoluto de la pista de baile temporal.