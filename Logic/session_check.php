<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['usuario_id'])) {
    echo json_encode([
        'loggedIn' => true,
        'nombre' => $_SESSION['usuario_nombre'],
        'id' => $_SESSION['usuario_id']
    ]);
} else {
    echo json_encode(['loggedIn' => false]);
}
