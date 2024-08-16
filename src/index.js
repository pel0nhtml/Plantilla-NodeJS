// Inserte el código aquí:  (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ
const reloj = new Date().getHours();

function mostrarHora() {
    const relojElemento = document.getElementById("reloj");
    const ahora = new Date();
    let hora = ahora.toLocaleTimeString();
    relojElemento.textContent = hora;   
}
setInterval(mostrarHora, 1000); //Cada segundo
 



