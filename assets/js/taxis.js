/**
 * ESCENARIO TAXIS URBANOS (POO)
 *
 * Idea docente:
 * - Clase Padre: define lo común (marca, patente, conductor, etc.)
 * - Clases Hijas: agregan detalles o restringen cosas (licencia, tipo, categoría)
 *
 * Jerarquía propuesta:
 * TaxiBase (padre)
 *  ├─ TaxiPersonas (hijo: transporte de personas)
 *  │   ├─ TaxiTradicional (hijo: techo amarillo, licencia A1)
 *  │   └─ TaxiParticular (hijo: licencia B)
 *  │       ├─ TaxiExpress
 *  │       └─ TaxiPremium
 *  └─ TaxiCargo (hijo: transporte de carga)
 */

/** Clase padre: lo común a cualquier "taxi" */
class TaxiBase {
  constructor({ patente, marca, modelo, conductorNombre, licencia }) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.conductorNombre = conductorNombre;
    this.licencia = licencia; // "A1" o "B"
  }

  mostrarInfo() {
    return `Patente: ${this.patente} | Vehículo: ${this.marca} ${this.modelo} | Conductor: ${this.conductorNombre} | Licencia: ${this.licencia}`;
  }
}

/** Taxi para transportar personas */
class TaxiPersonas extends TaxiBase {
  constructor(props) {
    super(props);
    this.capacidadPasajeros = props.capacidadPasajeros ?? 4;
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} | Capacidad: ${this.capacidadPasajeros} pasajeros`;
  }
}

/** Tradicional: techo amarillo + licencia A1 */
class TaxiTradicional extends TaxiPersonas {
  constructor(props) {
    super({ ...props, licencia: "A1" }); // fuerza A1 por regla del negocio
    this.techo = "Amarillo";
    this.tipo = "Tradicional";
  }

  mostrarInfo() {
    return `[${this.tipo}] ${super.mostrarInfo()} | Techo: ${this.techo}`;
  }
}

/** Particular: conductor licencia B (no necesariamente taxista) */
class TaxiParticular extends TaxiPersonas {
  constructor(props) {
    super({ ...props, licencia: "B" }); // fuerza licencia B
    this.tipo = "Particular";
  }

  mostrarInfo() {
    return `[${this.tipo}] ${super.mostrarInfo()}`;
  }
}

class TaxiExpress extends TaxiParticular {
  constructor(props) {
    super(props);
    this.subtipo = "Express";
    this.descripcionAuto = "Auto típico";
  }

  mostrarInfo() {
    return `[${this.tipo} - ${this.subtipo}] ${super.mostrarInfo()} | ${this.descripcionAuto}`;
  }
}

class TaxiPremium extends TaxiParticular {
  constructor(props) {
    super(props);
    this.subtipo = "Premium";
    this.descripcionAuto = "Auto de mayor categoría";
  }

  mostrarInfo() {
    return `[${this.tipo} - ${this.subtipo}] ${super.mostrarInfo()} | ${this.descripcionAuto}`;
  }
}

/** Cargo: transporte de carga en vez de personas */
class TaxiCargo extends TaxiBase {
  constructor(props) {
    super(props);
    this.tipo = "Cargo";
    this.capacidadKg = props.capacidadKg ?? 300;
  }

  mostrarInfo() {
    return `[${this.tipo}] ${super.mostrarInfo()} | Capacidad carga: ${this.capacidadKg} kg`;
  }
}

/* ========= DEMO ========= */
function demoTaxis() {
  const t1 = new TaxiTradicional({
    patente: "ABCD12",
    marca: "Toyota",
    modelo: "Yaris",
    conductorNombre: "Juan Pérez",
    // licencia se fuerza a A1
  });

  const t2 = new TaxiExpress({
    patente: "EFGH34",
    marca: "Hyundai",
    modelo: "Accent",
    conductorNombre: "María Soto",
    // licencia se fuerza a B
  });

  const t3 = new TaxiPremium({
    patente: "IJKL56",
    marca: "Mazda",
    modelo: "3",
    conductorNombre: "Carlos Díaz",
  });

  const t4 = new TaxiCargo({
    patente: "MNOP78",
    marca: "Peugeot",
    modelo: "Partner",
    conductorNombre: "Ana Rojas",
    licencia: "B",
    capacidadKg: 650,
  });

  console.log("=== DEMO TAXIS ===");
  console.log(t1.mostrarInfo());
  console.log(t2.mostrarInfo());
  console.log(t3.mostrarInfo());
  console.log(t4.mostrarInfo());
}

/* Conectamos botón del HTML */
document.querySelector("#btnTaxis").addEventListener("click", demoTaxis);