document.getElementById("BotonReserva").addEventListener("click", () => {
    const fecha = document.getElementById("fechaReserva").value;
    const hora = document.getElementById("horaReserva").value;
    const estilista = document.getElementById("estilistaReserva").value;

    const datosReserva = { fecha, hora, estilista };

    fetch("http://localhost/PinkMoon/mensajero.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosReserva)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensaje);
        document.getElementById("fechaReserva").value = "";
        document.getElementById("horaReserva").value = "";
        document.getElementById("estilistaReserva").value = "";
    })
    .catch(error => console.error("Error:", error));
});

