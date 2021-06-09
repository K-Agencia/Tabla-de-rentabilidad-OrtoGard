let asociado;
let cantidadKits;
let precioKit; // Automatico
let totalPagar; // Automatico
let obsequioKit; // Automatico
let totalKit; // Automatico
let valorEquivalente; // Automatico
let precioVenta;
let ventaTotal;  // Automatico
let gananciaVenta; // Automatico
let gananciaKit; // Automatico

function seleccion() {
    let SCOLife = document.getElementById("asociado");
    asociado = SCOLife.value;
    f_precioKit(asociado);
}

function f_precioKit(value) {
    if (value == "s") {
        precioKit = 25520;

        document.getElementById("precioKit").innerHTML = precioKit.toLocaleString("es-ES");
    } else {
        precioKit = 26860;
        document.getElementById("precioKit").innerHTML = precioKit.toLocaleString("es-ES");
    }
    f_totalPagar();
    
}

function f_totalPagar() {
    cantidadKits = document.getElementById("cantidadKits").value;
    // console.log(cantidadKits + " " + precioKit);
    totalPagar = cantidadKits * precioKit;
    document.getElementById("totalPagar").innerHTML = totalPagar.toLocaleString("es-ES");
    f_totalKits();
}

function f_totalKits() {
    let valorMax = 10; // 10 - 20 - 30
    let valorMin = valorMax - 10; // 0 - 10 - 20
    let kits = 0;  // 0 - 2 - 4
    // 21
    if(cantidadKits <= 100){
        for (let index = 0; index < 11; index++) {
            if (cantidadKits >= valorMin) {
                if (cantidadKits < valorMax) {
                    obsequioKit = kits;
                    document.getElementById("obsequioKit").innerHTML = kits;
                    break;
                } else {
                    valorMax = valorMax + 10;
                    kits = kits + 2;
                }
            }
        }
    }else{
        obsequioKit = 20;
        document.getElementById("obsequioKit").innerHTML = 20;
    }
    f_totalKit();
}

function f_totalKit(){
    totalKit = parseInt(obsequioKit) + parseInt(cantidadKits);
    document.getElementById("totalKit").innerHTML = totalKit;
    f_valorEquivalente();
}

function f_valorEquivalente(){
    valorEquivalente = totalPagar / totalKit;
    valorEquivalente = valorEquivalente.toFixed() + " ";    
    valorEquivalente = parseInt(valorEquivalente);
    document.getElementById("valorEquivalente").innerHTML = valorEquivalente.toLocaleString("es-ES");
    f_ventaTotal();
}
////////////////////////////////////////////////////////
function f_ventaTotal(){
    precioVenta = document.getElementById("precioVenta").value;
    ventaTotal = totalKit * precioVenta;
    document.getElementById("ventaTotal").innerHTML = ventaTotal.toLocaleString("es-ES");
    f_gananciaVenta();
}

function f_gananciaVenta(){
    gananciaVenta = ventaTotal - totalPagar; // se invierte la formula dado que da valores negativos
    gananciaVenta = gananciaVenta.toFixed() + " ";
    gananciaVenta = parseInt(gananciaVenta);
    document.getElementById("gananciaVenta").innerHTML = gananciaVenta.toLocaleString("es-ES");
    f_gananciaKit();
}

function f_gananciaKit(){
    gananciaKit = precioVenta -valorEquivalente; // se invierte la formula dado que da valores negativos
    gananciaKit = gananciaKit.toFixed() + " ";
    gananciaKit = parseInt(gananciaKit);
    document.getElementById("gananciaKit").innerHTML = gananciaKit.toLocaleString("es-ES");
}