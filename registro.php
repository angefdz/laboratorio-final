<?php
// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$primer_apellido = $_POST['primer_apellido'];
$segundo_apellido = $_POST['segundo_apellido'];
$email = $_POST['email'];
$login = $_POST['login'];
$password = $_POST['password'];

// Comprobar si los campos requeridos están completos
if (empty($nombre) || empty($primer_apellido) || empty($email) || empty($login) || empty($password)) {
    die("Por favor, complete todos los campos requeridos.");
}

// Comprobar si el formato del email es válido
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("El formato del correo electrónico no es válido.");
}

if (strlen($password) < 4 || strlen($password) > 8) {
    die("La contraseña debe tener entre 4 y 8 caracteres");
}

// Conexión a la base de datos
$servername = "localhost"; // Nombre del servidor
$username = "root"; // Nombre de usuario de la base de datos
$password_db = ""; // Contraseña de la base de datos
$dbname = "cursoSQL"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password_db, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

$sql = "SELECT * FROM usuario WHERE email='$email'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    echo '<div class="alert alert-danger mt-4">El email ya está registrado</div>';
} else {
    // Consulta para insertar los datos en la tabla
    $sql = "INSERT INTO usuario (nombre, primer_apellido, segundo_apellido, email, login, password)
    VALUES ('$nombre', '$primer_apellido', '$segundo_apellido', '$email', '$login', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Los registros se han insertado correctamente en la base de datos.";
    } else {
        echo "Error al insertar los registros: " . $conn->error;
    }
}

// Cerrar conexión
$conn->close();
?>
