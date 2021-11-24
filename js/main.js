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

    precioTicket() {
        let precioTicket = this.ubicacion.precio;
        return precioTicket;
    }

    verFechaRecital() {
        let fechaRecital = this.fechaRecital.fecha;
        return fechaRecital;
    }

    verUbicacion() {
        let ubicacionRecital = this.ubicacion.nombre;
        return ubicacionRecital;
    }

    verPrecioUbicacion() {
        let precioUbicacion = this.ubicacion.precio;
        return precioUbicacion;
    }
}

class Compra {
    constructor() {
        this.ticket = null;
        this.estacionamiento = null;
        this.fechaEntrega = null;
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

    precioFinal() {
        let precioFinal = this.estacionamiento.precio + this.ticket.precioTicket();
        return precioFinal;
    }

    verEstacionamiento() {
        let nombreEstacionamiento = this.estacionamiento.nombre;
        return nombreEstacionamiento;
    }

    verPrecioEstacionamiento() {
        let precioEstacionamiento = this.estacionamiento.precio;
        return precioEstacionamiento;
    }

    verFechaEntrega() {
        let fechaDeEntrega = this.fechaEntrega.fecha;
        return fechaDeEntrega;
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



const cliente = prompt('Hola! Bienvenid@, por favor ingresa tu nombre');

const hacerCompra = confirm(`Hola ${cliente}, ¿querés realizar una compra?`);

if (hacerCompra) {

    const nuevaCompra = new Compra();
    const nuevoTicket = new Ticket();

    // Se ofrecen las distintas fechas al usuario
    let fechaRecitalID = parseInt(prompt(`Elegi la fecha del recital: ${fechasRecital.map((fecha) => `${fecha.id}) ${fecha.fecha}`).join(' ')}`),);
    let fechaRecital = fechasRecital.find((fecha) => fecha.id === fechaRecitalID);

    while (!fechaRecital) {
        fechaRecitalID = parseInt(prompt(`Valor incorrecto, por favor elegi la fecha del recital: ${fechasRecital.map((fecha) => `${fecha.id}) ${fecha.fecha}`).join(' ')}`),);
        fechaRecital = fechasRecital.find((fecha) => fecha.id === fechaRecitalID);
    }

    nuevoTicket.definirFecha(fechaRecital);

    // Se ofrecen las distintas ubicaciones al usuario
    let ubicacionRecitalID = parseInt(prompt(`Elegi la ubicacion: ${ubicaciones.map((ubicacion) => `${ubicacion.id}) ${ubicacion.nombre} - $${ubicacion.precio}`).join(' ')}`),);
    let ubicacionRecital = ubicaciones.find((ubicacion) => ubicacion.id === ubicacionRecitalID);

    while (!ubicacionRecital) {
        ubicacionRecitalID = parseInt(prompt(`Valor incorrecto, por favor elegi la ubicacion: ${ubicaciones.map((ubicacion) => `${ubicacion.id}) ${ubicacion.nombre} - $${ubicacion.precio}`).join(' ')}`),);
        ubicacionRecital = ubicaciones.find((ubicacion) => ubicacion.id === ubicacionRecitalID);
    }

    nuevoTicket.definirUbicacion(ubicacionRecital);

    // Se ofrecen las distintas opciones de estacionamiento al usuario
    let estacionamientoID = parseInt(prompt(`Elegí tu estacionamiento: ${estacionamientos.map((estacionamiento) => `${estacionamiento.id}) ${estacionamiento.nombre} - $${estacionamiento.precio} `).join(' ')}`),);
    let estacionamiento = estacionamientos.find((estacionamiento) => estacionamiento.id === estacionamientoID)

    while (!estacionamiento) {
        estacionamientoID = parseInt(prompt(`Valor incorrecto, por favor elegí tu estacionamiento: ${estacionamientos.map((estacionamiento) => `${estacionamiento.id}) ${estacionamiento.nombre} - $${estacionamiento.precio} `).join(' ')}`),);
        estacionamiento = estacionamientos.find((estacionamiento) => estacionamiento.id === estacionamientoID);
    }

    let fechaEntregaID = parseInt(prompt(`Elegi la fecha de entrega: ${fechasEntrega.map((fecha) => `${fecha.id}) ${fecha.fecha}`).join(' ')}`),);
    let fechaEntrega = fechasEntrega.find((fecha) => fecha.id === fechaEntregaID);

    while (!fechaEntrega) {
        fechaEntregaID = parseInt(prompt(`Valor incorrecto, por favor elegi la fecha del recital: ${fechasEntrega.map((fecha) => `${fecha.id}) ${fecha.fecha}`).join(' ')}`),);
        fechaEntrega = fechasEntrega.find((fecha) => fecha.id === fechaEntregaID);
    }

    // Se agrega el ticket a la compra y se define estacionamiento y fecha de entrega
    nuevaCompra.agregarTicket(nuevoTicket);
    nuevaCompra.definirEstacionamiento(estacionamiento);
    nuevaCompra.definirFechaEntrega(fechaEntrega);

    let fechaDeRecital = nuevoTicket.verFechaRecital();
    let ubicacionDeRecital = nuevoTicket.verUbicacion();
    let precioUbicacion = nuevoTicket.verPrecioUbicacion();
    let nombreEstacionamiento = nuevaCompra.verEstacionamiento();
    let precioEstacionamiento = nuevaCompra.verPrecioEstacionamiento();
    let fechaDeEntrega = nuevaCompra.verFechaEntrega();
    let totalCompra = nuevaCompra.precioFinal();

    // Genero tabla en el DOM con el resumen de compra
    let tabla = document.createElement("table");
    tabla.setAttribute("class", "table table-striped table-light");

    let tablaHead = document.createElement("thead");
    tablaHead.setAttribute("class", "bg-light");

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
    fila.innerHTML = `<td>${fechaDeRecital}</td>
                      <td>${ubicacionDeRecital}</td>
                      <td>${precioUbicacion}</td>
                      <td>${nombreEstacionamiento}</td>
                      <td>${precioEstacionamiento}</td>
                      <td>${fechaDeEntrega}</td>
                      <td>${totalCompra}</td>`;
    tablaBody.appendChild(fila);

    tabla.appendChild(tablaBody);
    document.getElementById("compra").appendChild(tabla);

} else {
    alert('Te esperamos la proxima!');
}