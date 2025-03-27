<?php
include 'configuracion.php';

// Obtener datos enviados por el frontend
$data = json_decode(file_get_contents("php://input"), true);
$fecha = $data['fecha'];
$hora = $data['hora'];
$estilista = $data['estilista'];

// Insertar en la base de datos
$sql = "INSERT INTO reservas (fecha, hora, estilista) VALUES ('$fecha', '$hora', '$estilista')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["mensaje" => "Reserva guardada con éxito"]);
} else {
    echo json_encode(["error" => "Error al guardar la reserva: " . $conn->error]);
}

$conn->close();
?>
