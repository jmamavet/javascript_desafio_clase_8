// Defino clases
class Ticket {
    constructor() {
        this.fechaRecital = null;
        this.ubicacion = null;
    }

    definirFecha(fecha) {
        this.fechaRecital = fecha;
    }

    definirUbicacion(ubicacion) {
        this.ubicacion = ubicacion;
    }

    verFechaRecital() {
        return this.fechaRecital.fecha;
    }

    verUbicacion() {
        return this.ubicacion.nombre;
    }

    verPrecioUbicacion() {
        return this.ubicacion.precio;
    }
}

class Compra {
    constructor() {
        this.nombreCliente = null;
        this.ticket = null;
        this.estacionamiento = null;
        this.fechaEntrega = null;
    }

    definirNombreCliente(nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    agregarTicket(ticket) {
        this.ticket = ticket;
    }

    definirEstacionamiento(estacionamiento) {
        this.estacionamiento = estacionamiento;
    }

    definirFechaEntrega(fecha) {
        this.fechaEntrega = fecha;
    }

    verNombreCliente() {
        return this.nombreCliente;
    }

    verEstacionamiento() {
        return this.estacionamiento.nombre;
    }

    verPrecioEstacionamiento() {
        return this.estacionamiento.precio;
    }

    verFechaEntrega() {
        return this.fechaEntrega.fecha;
    }

    precioFinal() {
        return this.estacionamiento.precio + this.ticket.verPrecioUbicacion();
    }

}

// Defino array de fechas de recital con objetos literales
const fechasRecital = [{ id: 1, fecha: '15/02/2022' }, { id: 2, fecha: '18/02/2022' }, { id: 3, fecha: '21/02/2022' }, { id: 4, fecha: '24/02/2022' }];
// Defino array de ubicaciones con objetos literales
const ubicaciones = [{ id: 1, nombre: 'General', precio: 1500 }, { id: 2, nombre: 'Campo', precio: 4000 }, { id: 3, nombre: 'Platea Oeste', precio: 6000 }, { id: 4, nombre: 'Platea Este', precio: 6000 }, { id: 5, nombre: 'Campo VIP', precio: 10000 }];
// Defino array de estacionoamientos con objetos literales
const estacionamientos = [{ id: 1, nombre: 'Descubierto', precio: 300 }, { id: 2, nombre: 'Semi-Cubierto', precio: 600 }, { id: 3, nombre: 'Cubierto', precio: 900 }];
// Defino array de fechas de entrega con objetos literales
const fechasEntrega = [{ id: 1, fecha: '05/01/2022' }, { id: 2, fecha: '08/01/2022' }, { id: 3, fecha: '11/01/2022' }];


// Genero en el DOM todas las opciones para el ticket tomando los valores de los objetos literales
let opcionesFechaRecital = document.getElementById("opcionesFechaRecital");
fechasRecital.forEach(element => {
    let opcionFechaRecital = document.createElement("option");
    opcionFechaRecital.setAttribute("value", element.id);
    opcionFechaRecital.innerHTML = element.fecha;
    opcionesFechaRecital.appendChild(opcionFechaRecital);
});

let opcionesUbicacion = document.getElementById("opcionesUbicacion");
ubicaciones.forEach(element => {
    let opcionUbicacion = document.createElement("option");
    opcionUbicacion.setAttribute("value", element.id);
    opcionUbicacion.innerHTML = element.nombre + " - $" + element.precio;
    opcionesUbicacion.appendChild(opcionUbicacion);
});

let opcionesEstacionamiento = document.getElementById("opcionesEstacionamiento");
estacionamientos.forEach(element => {
    let opcionEstacionamiento = document.createElement("option");
    opcionEstacionamiento.setAttribute("value", element.id);
    opcionEstacionamiento.innerHTML = element.nombre + " - $" + element.precio;
    opcionesEstacionamiento.appendChild(opcionEstacionamiento);
});

let opcionesFechaRetiro = document.getElementById("opcionesFechaRetiro");
fechasEntrega.forEach(element => {
    let opcionFechaRetiro = document.createElement("option");
    opcionFechaRetiro.setAttribute("value", element.id);
    opcionFechaRetiro.innerHTML = element.fecha;
    opcionesFechaRetiro.appendChild(opcionFechaRetiro);
});

// Creo objetos para nuevo ticket y nueva compra
const nuevaCompra = new Compra();
const nuevoTicket = new Ticket();

// Valido formulario al clickear Confirmar en el form
let formularioCompra = document.getElementById("formularioCompra");
formularioCompra.addEventListener("submit", validarFormulario);

// Funcion para validar el formulario y pasarle los valores validados a los objetos
function validarFormulario(e) {
    let nombreUsuario = document.getElementById("nombreUsuario");

    if (nombreUsuario.value == "") {
        e.preventDefault();
        let errorNombreVacio = document.getElementById("errorNombreVacio");
        errorNombreVacio.innerHTML = "Por favor ingresa tu nombre para poder continuar";
    } else {
        nuevaCompra.definirNombreCliente(nombreUsuario.value);
    }

    if (opcionesFechaRecital.value == "0") {
        e.preventDefault();
        let errorFechaRecitalVacia = document.getElementById("errorFechaRecitalVacia");
        errorFechaRecitalVacia.innerHTML = "Por favor selecciona una fecha para el recital";
    } else {
        fechasRecital.forEach(element => {
            if (element.id == opcionesFechaRecital.value) {
                nuevoTicket.definirFecha(element);
            }
        });
    }

    if (opcionesUbicacion.value == "0") {
        e.preventDefault();
        let errorUbicacionVacia = document.getElementById("errorUbicacionVacia");
        errorUbicacionVacia.innerHTML = "Por favor selecciona una ubicacion";
    } else {
        ubicaciones.forEach(element => {
            if (element.id == opcionesUbicacion.value) {
                nuevoTicket.definirUbicacion(element);
            }
        });
    }

    if (opcionesFechaRetiro.value == "0") {
        e.preventDefault();
        let errorFechaRetiroVacia = document.getElementById("errorFechaRetiroVacia");
        errorFechaRetiroVacia.innerHTML = "Por favor selecciona una fecha para retirar tu entrada";
    } else {
        fechasEntrega.forEach(element => {
            if (element.id == opcionesFechaRetiro.value) {
                nuevaCompra.definirFechaEntrega(element);
            }
        });
    }

    if (opcionesEstacionamiento.value == "0") {
        nuevaCompra.definirEstacionamiento("Sin estacionamiento");
    } else {
        estacionamientos.forEach(element => {
            if (element.id == opcionesEstacionamiento.value) {
                nuevaCompra.definirEstacionamiento(element);
            }
        });
    }

    nuevaCompra.agregarTicket(nuevoTicket);

    let nombreDeCliente = nuevaCompra.verNombreCliente();
    let fechaDeRecital = nuevoTicket.verFechaRecital();
    let ubicacionElegida = nuevoTicket.verUbicacion();
    let precioUbicacion = nuevoTicket.verPrecioUbicacion();
    let estacionamientoElegido = nuevaCompra.verEstacionamiento();
    let precioEstacionamiento = nuevaCompra.verPrecioEstacionamiento();
    let fechaDeEntrega = nuevaCompra.verFechaEntrega();
    let totalCompra = nuevaCompra.precioFinal();

    // Llamo a la funcion que genera la tabla dinamica en el DOM con los valores seleccionados
    generarTabla(nombreDeCliente, fechaDeRecital, ubicacionElegida, precioUbicacion, estacionamientoElegido, precioEstacionamiento, fechaDeEntrega, totalCompra);
}

// Funcion para generar dinamicamente la tabla en el DOM
function generarTabla(nombreDeCliente, fechaDeRecital, ubicacionElegida, precioUbicacion, estacionamientoElegido, precioEstacionamiento, fechaDeEntrega, totalCompra) {
    // Genero tabla en el DOM con el resumen de compra
    let tabla = document.createElement("table");
    tabla.setAttribute("class", "table table-striped table-light");

    let tablaHead = document.createElement("thead");
    tablaHead.setAttribute("class", "bg-light");

    let header0 = document.createElement("th");
    header0.innerHTML = "Nombre Del Cliente";
    let header1 = document.createElement("th");
    header1.innerHTML = "Fecha Del Recital";
    let header2 = document.createElement("th");
    header2.innerHTML = "Ubicacion";
    let header3 = document.createElement("th");
    header3.innerHTML = "Precio Entrada";
    let header4 = document.createElement("th");
    header4.innerHTML = "Estacionamiento";
    let header5 = document.createElement("th");
    header5.innerHTML = "Precio Estacionamiento";
    let header6 = document.createElement("th");
    header6.innerHTML = "Fecha De Entrega";
    let header7 = document.createElement("th");
    header7.innerHTML = "Total Compra";

    tablaHead.appendChild(header0);
    tablaHead.appendChild(header1);
    tablaHead.appendChild(header2);
    tablaHead.appendChild(header3);
    tablaHead.appendChild(header4);
    tablaHead.appendChild(header5);
    tablaHead.appendChild(header6);
    tablaHead.appendChild(header7);

    tabla.appendChild(tablaHead);

    let tablaBody = document.createElement("tbody");
    let fila = document.createElement("tr");
    fila.innerHTML = `  <td>${nombreDeCliente}</td>
                            <td>${fechaDeRecital}</td>
                            <td>${ubicacionElegida}</td>
                            <td>${precioUbicacion}</td>
                            <td>${estacionamientoElegido}</td>
                            <td>${precioEstacionamiento}</td>
                            <td>${fechaDeEntrega}</td>
                            <td>${totalCompra}</td>`;
    tablaBody.appendChild(fila);

    tabla.appendChild(tablaBody);
    document.getElementById("compra").appendChild(tabla);
}