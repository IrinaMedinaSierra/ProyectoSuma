function mostrarNumeros() {

    sumando1 = document.querySelector("#sumando1");
    sumando2 = document.querySelector("#sumando2");
    sumando1.value = parseInt(Math.random() * 100 + 1);
    sumando2.value = parseInt(Math.random() * 100 + 1);
    sumaCorrecta = Number(sumando1.value) + Number(sumando2.value);

}
let contadorC=0;
let contadorI=0;
let respuesta = document.querySelector("#resultado");
respuesta.addEventListener("change",(event) => {
    console.log(typeof (respuesta.value));
    if (sumaCorrecta === Number(respuesta.value)) {
        contadorC++
        mostrarNumeros();
    } else {
        contadorI++;
        mostrarNumeros();
    }
    respuesta.value="";
    document.querySelector("#correcta").innerHTML=contadorC;
    document.querySelector("#incorrecta").innerHTML=contadorI;
});