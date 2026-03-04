/**
 * SUMATORIA (según el PDF)
 *
 * - constructor(base): escribe la primera línea
 * - sumar(): escribe "las siguientes líneas en parejas" (2 líneas por click)
 * - base aleatoria 1..10  [oai_citation:9‡Modelado de Clases en JavaScript con Enfoque Orientado a Objetos.pdf](sediment://file_00000000a8a8720e9bdff6f9632e6a22)
 */

class Sumatoria {
  constructor(base, onOutput) {
    this.base = base;
    this.total = base;

    // siguiente incremento: +1, +2, +3...
    this.siguiente = 1;

    // contador de ejecuciones para #1 #2 #3...
    this.contador = 0;

    this.onOutput = onOutput;

    // ✅ Primera línea desde constructor
    this.onOutput(`Constructor -> Base: ${this.base}, Total inicial: ${this.total}`);
  }

  sumar() {
    this.contador += 1;

    const inc = this.siguiente;
    const totalAntes = this.total;
    this.total += inc;

    // ✅ “Líneas en parejas”: 2 salidas por ejecución
    this.onOutput(`Sumar #${this.contador}: ${totalAntes} + ${inc}`);
    this.onOutput(`Total acumulado: ${this.total}`);

    this.siguiente += 1;
  }
}

/* ========= UI ========= */
const baseInput = document.querySelector("#baseInput");
const btnSumar = document.querySelector("#btnSumar");
const btnReset = document.querySelector("#btnResetSumatoria");
const btnLimpiar = document.querySelector("#btnLimpiar");
const historial = document.querySelector("#historial");

function agregarLinea(texto) {
  const li = document.createElement("li");
  li.textContent = texto;
  historial.appendChild(li);
}

function limpiarSalida() {
  historial.innerHTML = "";
}

/* Creamos el objeto con base aleatoria 1..10 */
let sumatoria = null;

function crearNuevaSumatoria() {
  limpiarSalida();
  const baseAleatoria = Math.floor(Math.random() * 10) + 1;
  baseInput.value = baseAleatoria;
  sumatoria = new Sumatoria(baseAleatoria, agregarLinea);
}

// Inicial
crearNuevaSumatoria();

// Eventos
btnSumar.addEventListener("click", () => sumatoria.sumar());
btnReset.addEventListener("click", crearNuevaSumatoria);
btnLimpiar.addEventListener("click", limpiarSalida);