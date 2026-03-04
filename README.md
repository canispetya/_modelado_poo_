# Módulo 4 - Modelado de Clases en JavaScript (POO)

Sitio de demostración renovado con **diseño moderno** y 
una paleta de colores vibrante en amarillo, magenta y cyan.
La fuente principal es *Poppins* para mejorar legibilidad y estilo.

Este proyecto está pensado para practicar conceptos de POO en el
navegador usando HTML, CSS y JavaScript.

## 🎨 Paleta y diseño
- **Amarillo**: acentos en encabezados y botones
- **Magenta**: borde de tarjetas y gradientes
- **Cyan**: títulos de sección
- Tema oscuro de fondo con contraste alto
- Interacciones con transiciones suaves y elevación al pasar el mouse

## 📌 Escenarios disponibles

### 1) Taxis Urbanos
Modelo jerárquico con clases que representan distintos tipos de taxis:
- TaxiTradicional (licencia A1, techo amarillo)
- TaxiParticular (licencia B) con variantes Express y Premium
- TaxiCargo para transporte de carga

Cada clase hereda de una base común y añade atributos/métodos propios.

### 2) Catálogo Sony Chile
Clases por categoría de producto (Televisores, Cámaras, Audio,
Consolas, Accesorios) que extienden de `Producto`.
Un objeto `CatalogoSony` administra la colección y permite listar o
filtrar por categoría.

### 3) Sumatoria
Clase que inicia con una base aleatoria (1‑10) y acumula
incrementos sucesivos, mostrando el proceso en pantalla.
Los botones permiten sumar, reiniciar la base o limpiar el historial.

## 🚀 Uso
1. Abre `index.html` en tu navegador favorito.
2. Explora cada módulo:
   - Taxis y Sony: ejecuta los demos y revisa la consola del browser.
   - Sumatoria: usa los botones y observa el historial dentro de la página.
3. Puedes inspeccionar/editar el código en `assets/js` para experimentar.

## 💡 Consejos de aprendizaje
- **Clase**: plantilla que describe comportamiento/estado.
- **Objeto**: instancia creada por una clase.
- **Herencia**: las clases hijas reutilizan y extienden el código de las
  clases padre.
- **`super()`**: invoca al constructor del padre dentro de un hijo.

¡Diviértete modificando y ampliando este ejemplo para tus propias ideas!