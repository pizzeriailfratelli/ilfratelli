# Il Fratelli — Ideas de Diseño

## Enfoque Elegido: "Manifesto Napoletano"

Inspirado en el estilo editorial de porteño.com.ar: fondo oscuro, tipografía grande en mayúsculas, layout asimétrico, animaciones de scroll, y una identidad visual fuerte y artesanal.

### Design Movement
Editorial italiano oscuro — mezcla de manifesto tipográfico y artesanía gastronómica. Referencia directa a porteño.com.ar: negro profundo, texto blanco, letras grandes, mucho espacio negativo.

### Core Principles
1. Tipografía como protagonista — los titulares son enormes, en mayúsculas, con serif elegante
2. Oscuridad cálida — fondo negro con toques de crema y rojo italiano
3. Asimetría editorial — secciones que rompen la grilla, texto que se desborda
4. Movimiento sutil — fade-in y slide-up al hacer scroll, sin exageraciones

### Color Philosophy
- Fondo: #0d0d0d (negro cálido, no frío)
- Texto principal: #f5f0e8 (crema/off-white, cálido)
- Acento rojo: #c8102e (rojo italiano, bandera)
- Acento verde: #1a5c2a (verde italiano, bandera)
- Dorado: #b8965a (trigo, masa de pizza)
- Separadores: rgba(245,240,232,0.12)

### Layout Paradigm
- Navbar: logo izquierda, nav derecha, fondo transparente → oscuro al scroll
- Hero: texto enorme a la izquierda, imagen a la derecha (asimétrico)
- Secciones con números (01, 02, 03...)
- Productos: grid 2 columnas en desktop, 1 en mobile, tarjetas oscuras
- Nosotros: layout editorial con texto grande y foto
- FAQ: acordeón minimalista
- Footer: minimal, solo lo necesario

### Signature Elements
1. Números de sección en rojo (01, 02, 03) — estilo porteño
2. Líneas divisoras finas en crema/10% opacidad
3. Texto en mayúsculas para títulos de sección

### Interaction Philosophy
- Scroll animations: fade-in + translateY desde abajo (Framer Motion)
- Hover en cards: sutil scale + border iluminado
- Navbar: transición suave a fondo oscuro al scrollear
- Botones: scale(0.97) en active, transición 160ms

### Animation
- Entrada de elementos: opacity 0→1 + translateY(20px→0), duration 0.6s, ease-out
- Stagger en listas: 80ms entre items
- Navbar: transition background 300ms ease
- Hover cards: scale 1.02, 200ms ease-out

### Typography System
- Display: Playfair Display (serif) — para titulares grandes
- Body: DM Sans (sans-serif) — para texto corrido
- Accent: DM Sans uppercase + letter-spacing para labels

### Brand Essence
Pizza napoletana artesanal para argentinos que valoran lo auténtico. Tres hermanos, una abuela, una receta. Diferente.

Personalidad: Auténtico · Artesanal · Apasionado

### Brand Voice
Headlines directos, sin florituras. Voz de artesano orgulloso, no de marketing corporativo.
- "Hecha entre hermanos. Lista en 15 minutos."
- "No usamos atajos. Usamos harina, tomate y tiempo."

### Signature Brand Color
#c8102e — rojo italiano, inconfundible, cálido

## Style Decisions
- Fondo oscuro (#0d0d0d) como base de toda la web
- Texto crema (#f5f0e8) para máximo contraste cálido
- Números de sección en rojo como elemento de firma
- Playfair Display para display, DM Sans para body
