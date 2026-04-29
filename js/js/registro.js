function nextStep(stepNumber) {
    console.log("Navegando al paso:", stepNumber);
    const screens = document.querySelectorAll('.screen');
    
    // Ocultar todas las pantallas
    screens.forEach(s => s.classList.remove('active'));
    
    // Mostrar la pantalla seleccionada
    const target = document.getElementById('step-' + stepNumber);
    if(target) {
        target.classList.add('active');
    } else {
        console.error("Error: El ID step-" + stepNumber + " no existe.");
    }
}

window.addEventListener("load", () => {
    const loader = document.getElementById("pantalla_carga_container");

    // Esperamos a que la animación "ampliar" termine (aprox 9 segundos)
    // o puedes bajar el tiempo si quieres que entre antes a la app
    setTimeout(() => {
        loader.style.opacity = "0"; // Desvanecimiento suave
        setTimeout(() => {
            loader.remove(); // Lo eliminamos del código para que no moleste
        }, 500); 
    }, 9000); 
});