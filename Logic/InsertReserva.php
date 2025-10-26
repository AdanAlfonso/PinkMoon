<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Recibir datos
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No se recibieron datos."]);
    exit;
}

$fecha = $data['fecha'] ?? null;
$hora = $data['hora'] ?? null;
$estilista = $data['estilista'] ?? null;
$categoria = $data['categoria'] ?? null;
$servicio = $data['servicio'] ?? null;
$id_usuario = $data['id_usuario'] ?? null;

if (!$fecha || !$hora || !$estilista || !$categoria || !$servicio || !$id_usuario) {
    echo json_encode(["success" => false, "message" => "Faltan campos obligatorios."]);
    exit;
}

// Aquí haces la conexión con tu base de datos (ejemplo con SQL Server)
$serverName = "Alfonso"; 
$connectionOptions = [
    "Database" => "SalonUnas",
    "Uid" => "USUARIO",
    "PWD" => "USUARIO"
];

$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    echo json_encode(["success" => false, "message" => "Conexión fallida"]);
    exit;
}

// Insertar en tabla
$sql = "INSERT INTO Reservas (id_usuario, fecha, hora, estilista, categoria_servicio, servicio_especifico) 
        VALUES (?, ?, ?, ?, ?, ?)";

$params = [$id_usuario, $fecha, $hora, $estilista, $categoria, $servicio];
$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt === false) {
    echo json_encode(["success" => false, "message" => "Error al guardar la reserva."]);
} else {
    echo json_encode(["success" => true]);
}
?>
