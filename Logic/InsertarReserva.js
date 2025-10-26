let userId = null;

fetch("http://localhost/ADN/Logic/session_check.php")
  .then(res => res.json())
  .then(data => {
    if (data.loggedIn) {
      userId = data.id;
    }
  });

document.getElementById("BotonReserva").addEventListener("click", () => {
    const fecha = document.getElementById("fechaReserva").value;
    const hora = document.getElementById("horaReserva").value;
    const estilista = document.getElementById("estilistaReserva").value;
    const categoria = document.getElementById("categoriaServicio").value;
    const servicio = document.getElementById("servicioEspecifico").value;

    if (!userId) {
        alert("Debes iniciar sesión para hacer una reservación.");
        return;
    }

    fetch("http://localhost/ADN/Logic/InsertReserva.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fecha,
            hora,
            estilista,
            categoria,
            servicio,
            id_usuario: userId
        })
    })
    .then(res => res.json())
    .then(response => {
        if (response.success) {
            alert("¡Reservación exitosa!");
        } else {
            alert("Error al guardar: " + response.message);
        }
    });
});
