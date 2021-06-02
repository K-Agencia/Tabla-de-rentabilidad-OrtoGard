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

        document.getElementById("precioKit").value = precioKit;
    } else {
        precioKit = 26860;
        document.getElementById("precioKit").value = precioKit;
    }
    f_totalPagar();
    
}

function f_totalPagar() {
    cantidadKits = document.getElementById("cantidadKits").value;
    // console.log(cantidadKits + " " + precioKit);
    totalPagar = cantidadKits * precioKit;
    document.getElementById("totalPagar").value = totalPagar;
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
                    document.getElementById("obsequioKit").value = kits;
                    break;
                } else {
                    valorMax = valorMax + 10;
                    kits = kits + 2;
                }
            }
        }
    }else{
        obsequioKit = 20;
        document.getElementById("obsequioKit").value = 20;
    }
    f_totalKit();
}

function f_totalKit(){
    totalKit = parseInt(obsequioKit) + parseInt(cantidadKits);
    document.getElementById("totalKit").value = totalKit;
    f_valorEquivalente();
}

function f_valorEquivalente(){
    valorEquivalente = totalPagar / totalKit;
    valorEquivalente = valorEquivalente.toFixed() + " ";    
    valorEquivalente = parseInt(valorEquivalente);
    document.getElementById("valorEquivalente").value = valorEquivalente;
    f_ventaTotal();
}

function f_ventaTotal(){
    precioVenta = document.getElementById("precioVenta").value;
    ventaTotal = totalKit * precioVenta;
    document.getElementById("ventaTotal").value = ventaTotal;
    f_gananciaVenta();
}

function f_gananciaVenta(){
    gananciaVenta = ventaTotal - totalPagar; // se invierte la formula dado que da valores negativos
    gananciaVenta = gananciaVenta.toFixed() + " ";
    gananciaVenta = parseInt(gananciaVenta);
    document.getElementById("gananciaVenta").value = gananciaVenta;
    f_gananciaKit();
}

function f_gananciaKit(){
    gananciaKit = precioVenta -valorEquivalente; // se invierte la formula dado que da valores negativos
    gananciaKit = gananciaKit.toFixed() + " ";
    gananciaKit = parseInt(gananciaKit);
    document.getElementById("gananciaKit").value = gananciaKit;
}