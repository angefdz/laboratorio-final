<?php
// Configurar la conexión a la base de datos
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'cursoSQL';

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay errores en la conexión
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}

// Consulta SQL para obtener los datos de la base de datos
$sql = 'SELECT nombre, primer_apellido, segundo_apellido, email FROM usuario';

// Ejecutar la consulta y obtener los resultados
$result = $conn->query($sql);

// Crear un array para almacenar los datos
$rows = array();

// Recorrer los resultados y guardarlos en el array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
}

// Cerrar la conexión a la base de datos
$conn->close();

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($rows);
?>
