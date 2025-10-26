document.getElementById("BotonRegistro").addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    if (!nombre || !apellidos || !edad || !correo || !telefono || !contrasena) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    fetch("http://localhost/ADN/Logic/registro.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, apellidos, edad, correo, telefono, contrasena })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "../Structure/login.html";
        } else {
            alert("Error en el registro: " + data.message);
        }
    })
    .catch(err => {
        console.error("Error durante el registro:", err);
        alert("Hubo un problema al registrar. Intenta nuevamente.");
    });
});
