function cargarDatos() {
    var tabla = document.getElementById('tablaDatos');
    tabla.innerHTML = ''; // Limpiar la tabla antes de cargar nuevos datos

    // Realizar una solicitud al servidor para obtener los datos de la base de datos
    fetch('datos.php')
        .then(response => response.json())
        .then(data => {
            // Crear filas de la tabla con los datos obtenidos
            data.forEach(row => {
                var fila = document.createElement('tr');
                var celdaNombre = document.createElement('td');
                celdaNombre.textContent = row.nombre;
                var celdaPrimerApellido = document.createElement('td');
                celdaPrimerApellido.textContent = row.primer_apellido;
                var celdaSegundoApellido = document.createElement('td');
                celdaSegundoApellido.textContent = row.segundo_apellido;
                var celdaEmail = document.createElement('td');
                celdaEmail.textContent = row.email;

                fila.appendChild(celdaNombre);
                fila.appendChild(celdaPrimerApellido);
                fila.appendChild(celdaSegundoApellido);
                fila.appendChild(celdaEmail);

                tabla.appendChild(fila);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function volverPaginaInicial() {
    window.location.href = 'index.html';
}

cargarDatos();
