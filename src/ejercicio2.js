import { contador } from "./ejercicio1";

class Contador {
  // Inserte el código aquí
    constructor(valor) {
    this.contador = 0;
    this.valor = valor;    
  }
  siguiente() {
    this.valor += 1;
    return this.valor;
  }
}
// Inserte el código aquí
let instancia = new Contador(0);

export { instancia }