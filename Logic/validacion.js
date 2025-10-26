document.getElementById("BotonInicioSesion").addEventListener("click", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Por favor, completa todos los campos");
        return;
    }

    fetch("http://localhost/ADN/Logic/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            window.location.href = "../index.html";
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    })
    .catch(err => {
        console.error("Error al iniciar sesión:", err);
        alert("Hubo un problema. Intenta nuevamente.");
    });
});
