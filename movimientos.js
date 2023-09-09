let movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234568", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]
cargar = function () {
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
    guardar();


}

buscarCuenta = function () {
    let recuperado
    recuperado = recuperarTexto("txtCaja1")
    console.log(movimientos[0].numeroCuenta);
    filtrarMovimientos(recuperado);
}

filtrarMovimientos = function (numeroCuenta) {
    let movimientosCuenta = [];
    for (let i = 0; i < movimientos.length; i++) {
        console.log(movimientos[i].numeroCuenta)
        if (movimientos[i].numeroCuenta === numeroCuenta) {
            movimientosCuenta.push(movimientos[i]);
        }

    }

    mostrarMovimientos(movimientosCuenta);


}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos = function (misMovimientos) {
    let cmpTabla = document.getElementById("tablaMovimientos");
    let contenidoTabla = "<table><tr>"
        + "<th>CUENTA</th>"
        + "<th>MONTO</th>"
        + "<th>OPERACION</th>"
        + "</tr>"

    for (let i = 0; i < misMovimientos.length; i++) {
        elementoTabla = misMovimientos[i];
        contenidoTabla +=
            "<tr><td>" + elementoTabla.numeroCuenta + "</td>" +
            "<td>" + elementoTabla.monto + "</td>" +
            "<td>" + elementoTabla.tipo + "</td>" +
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}




