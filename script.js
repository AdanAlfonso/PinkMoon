document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("BotonReserva").addEventListener("click", function () {
        let fecha = document.getElementById("fechaReserva").value;
        let hora = document.getElementById("horaReserva").value;
        let estilista = document.getElementById("estilistaReserva").value;

        if (fecha === "" || hora === "" || estilista === "") {
            alert("Por favor, completa todos los campos antes de reservar.");
            return;
        }

        let mensaje = `Fecha: ${fecha}\nHora: ${hora}\nEstilista: ${estilista}`;
        alert("¡Reservación Generada!\n" + mensaje);

        console.log("Reserva generada:", { fecha, hora, estilista });

        document.getElementById("fechaReserva").value = "";
        document.getElementById("horaReserva").value = "";
        document.getElementById("estilistaReserva").value = "";
    });
});
