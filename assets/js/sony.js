/**
 * CATÁLOGO SONY (modelado POO)
 *
 * Idea docente:
 * - Producto = clase base
 * - Cada categoría hereda y agrega atributos
 * - Un Catálogo administra una colección (agregar, listar, filtrar)
 */

class Producto {
  constructor({ nombre, modelo, precioCLP, categoria }) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.precioCLP = precioCLP;
    this.categoria = categoria;
  }

  mostrarInfo() {
    return `[${this.categoria}] ${this.nombre} (${this.modelo}) - $${this.precioCLP.toLocaleString("es-CL")} CLP`;
  }
}

class Televisor extends Producto {
  constructor(props) {
    super({ ...props, categoria: "Televisores" });
    this.pulgadas = props.pulgadas;
    this.tipoPanel = props.tipoPanel; // LED / OLED
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} | ${this.pulgadas}" ${this.tipoPanel}`;
  }
}

class Camara extends Producto {
  constructor(props) {
    super({ ...props, categoria: "Cámaras" });
    this.megapixeles = props.megapixeles;
    this.tipo = props.tipo; // Mirrorless, compacta, etc.
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} | ${this.tipo} ${this.megapixeles}MP`;
  }
}

class Audio extends Producto {
  constructor(props) {
    super({ ...props, categoria: "Audio" });
    this.formato = props.formato; // audífonos, barra de sonido, parlante
    this.conectividad = props.conectividad; // BT, WiFi, etc.
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} | ${this.formato} (${this.conectividad})`;
  }
}

class Consola extends Producto {
  constructor(props) {
    super({ ...props, categoria: "Consolas" });
    this.generacion = props.generacion; // PS5, etc.
    this.almacenamientoGB = props.almacenamientoGB;
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} | ${this.generacion} ${this.almacenamientoGB}GB`;
  }
}

class Accesorio extends Producto {
  constructor(props) {
    super({ ...props, categoria: "Accesorios" });
    this.compatibleCon = props.compatibleCon; // PS5, cámaras, etc.
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} | Compatible con: ${this.compatibleCon}`;
  }
}

class CatalogoSony {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto);
  }

  listar() {
    return this.productos.map(p => p.mostrarInfo());
  }

  filtrarPorCategoria(categoria) {
    return this.productos
      .filter(p => p.categoria === categoria)
      .map(p => p.mostrarInfo());
  }
}

/* ========= DEMO ========= */
const catalogo = new CatalogoSony();

// Datos de ejemplo (lo importante: categorías + atributos + métodos)
catalogo.agregar(new Televisor({
  nombre: "BRAVIA X",
  modelo: "XR-55X90L",
  precioCLP: 999990,
  pulgadas: 55,
  tipoPanel: "LED"
}));

catalogo.agregar(new Camara({
  nombre: "Alpha",
  modelo: "ILCE-7M4",
  precioCLP: 2799990,
  megapixeles: 33,
  tipo: "Mirrorless"
}));

catalogo.agregar(new Audio({
  nombre: "WH-1000XM",
  modelo: "WH-1000XM5",
  precioCLP: 399990,
  formato: "Audífonos",
  conectividad: "Bluetooth"
}));

catalogo.agregar(new Consola({
  nombre: "PlayStation",
  modelo: "CFI-1200",
  precioCLP: 649990,
  generacion: "PS5",
  almacenamientoGB: 825
}));

catalogo.agregar(new Accesorio({
  nombre: "DualSense",
  modelo: "CFI-ZCT1W",
  precioCLP: 79990,
  compatibleCon: "PS5"
}));

function demoSony() {
  console.log("=== DEMO CATÁLOGO SONY ===");
  catalogo.listar().forEach(linea => console.log(linea));
}

function demoSonyFiltrarTelevisores() {
  console.log("=== FILTRO: Televisores ===");
  catalogo.filtrarPorCategoria("Televisores").forEach(linea => console.log(linea));
}

document.querySelector("#btnSony").addEventListener("click", demoSony);
document.querySelector("#btnSonyFiltrar").addEventListener("click", demoSonyFiltrarTelevisores);