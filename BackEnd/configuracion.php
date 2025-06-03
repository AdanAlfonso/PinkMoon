<?php
$host = "localhost"; //Servidor o Host
$user = "root";  // Usuario de MySQL 
$password = "";  // Contraseña 
$database = "SalonUnas"; //Nombre de la base de datos

// Crear conexión
$conn = new mysqli($host, $user, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
