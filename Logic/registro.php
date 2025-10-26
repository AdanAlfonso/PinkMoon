<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');

// Obtener datos del cuerpo de la solicitud
$data = json_decode(file_get_contents('php://input'), true);

// Validación básica
if (
    !isset($data['nombre'], $data['apellidos'], $data['edad'], 
            $data['correo'], $data['telefono'], $data['contrasena'])
) {
    echo json_encode(['success' => false, 'message' => 'Faltan datos']);
    exit;
}

// Asignar a variables
$nombre = $data['nombre'];
$apellidos = $data['apellidos'];
$edad = (int)$data['edad'];
$correo = $data['correo'];
$telefono = $data['telefono'];
$contrasena = $data['contrasena'];

// Conexión a SQL Server
$serverName = "Alfonso";
$connectionOptions = [
    "Database" => "SalonUnas",
    "Uid" => "USUARIO",
    "PWD" => "USUARIO"
];
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    $errors = sqlsrv_errors();
    echo json_encode(['success' => false, 'message' => 'Error de conexión', 'errors' => $errors]);
    exit;
}

// Verificar si ya existe el correo
$checkSql = "SELECT * FROM Clientes WHERE Correo = ?";
$checkStmt = sqlsrv_query($conn, $checkSql, [$correo]);

if ($checkStmt && sqlsrv_fetch_array($checkStmt, SQLSRV_FETCH_ASSOC)) {
    echo json_encode(['success' => false, 'message' => 'El correo ya está registrado']);
    exit;
}

// Insertar nuevo usuario
$insertSql = "INSERT INTO Clientes (Nombre, Apellidos, Edad, Correo, Telefono, Contrasena)
              VALUES (?, ?, ?, ?, ?, ?)";
$params = [$nombre, $apellidos, $edad, $correo, $telefono, $contrasena];

$insertStmt = sqlsrv_query($conn, $insertSql, $params);

if ($insertStmt) {
    echo json_encode(['success' => true, 'message' => 'Usuario registrado correctamente']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al registrar usuario']);
}
