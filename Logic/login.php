<?php
session_start(); // Iniciar sesión

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['email'], $data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Faltan datos']);
    exit;
}

$email = $data['email'];
$password = $data['password'];

$serverName = "Alfonso";
$connectionOptions = [
    "Database" => "SalonUnas",
    "Uid" => "USUARIO",
    "PWD" => "USUARIO"
];

$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    $errors = sqlsrv_errors();
    echo json_encode([
        'success' => false,
        'message' => 'Error de conexión',
        'errors' => $errors
    ]);
    exit;
}

// Consulta simple sin hash (texto plano)
$sql = "SELECT * FROM Clientes WHERE Correo = ? AND Contrasena = ?";
$params = [$email, $password];

$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt && $row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    // Guardar datos en sesión
    $_SESSION['usuario_id'] = $row['ID'];
    $_SESSION['usuario_nombre'] = $row['Nombre'];
    $_SESSION['usuario_email'] = $row['Correo'];

    echo json_encode([
        'success' => true,
        'nombre' => $row['Nombre'],
        'id' => $row['ID']
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'Credenciales inválidas']);
}

sqlsrv_close($conn);
