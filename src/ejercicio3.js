// Inserte el código aquí
let clonarArreglo = (arr) => {  
    return[...arr];
}

let clonarObjeto = (obj) => {
    return {...obj};
}
function sumar(...numeros) { 
    return numeros.reduce((acc, curr) => acc + curr, 0);
}
////

function saludar (nombre3 = "Desconocido") {
    return ("Hola",  nombre3);

}

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };