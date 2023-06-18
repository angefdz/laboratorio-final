const valores = {
    nombre: /^[a-zA-ZÁ-ÿ]+$/,
    email: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    endEmail: /.([a-z\.]{2,6})$/,
    usuario:/^[a-zA-ZÁ-ÿ0-9]/
}


function enviar(){
    var form = document.getElementById('formulario');
form.addEventListener('submit',function(evt){
    evt.preventDefault();
  
    if (document.getElementById('nombre').value === ''){
        document.getElementById('errorNombre').textContent='Rellene el campo';
        document.getElementById('errorNombre').className='invalid-feedback';
        document.getElementById('nombre').className='invalid';
        
    }else{
        if (!valores.nombre.exec(document.getElementById('nombre').value)){
            document.getElementById('errorNombre').textContent='Nombre inválido';
            document.getElementById('errorNombre').className='invalid-feedback';
            document.getElementById('nombre').className='invalid';
        }
        else{
            document.getElementById('errorNombre').textContent='Correcto';
            document.getElementById('errorNombre').className='back';
            document.getElementById('nombre').className='valid';
        }
    }

    if (document.getElementById('primer_apellido').value === ''){
        document.getElementById('errorPrimerApellido').textContent='Rellene el campo';
        document.getElementById('errorPrimerApellido').className='invalid-feedback';
        document.getElementById('primer_apellido').className='invalid';
        
    }else{
        if (!valores.nombre.exec(document.getElementById('primer_apellido').value)){
            document.getElementById('errorPrimerApellido').textContent='Nombre inválido';
            document.getElementById('errorPrimerApellido').className='invalid-feedback';
            document.getElementById('primer_apellido').className='invalid';
        }
        else{
            document.getElementById('errorPrimerApellido').textContent='Correcto';
            document.getElementById('errorPrimerApellido').className='back';
            document.getElementById('primer_apellido').className='valid';
        }
    }

    if (document.getElementById('segundo_apellido').value === ''){
        document.getElementById('errorSegundoApellido').textContent='Rellene el campo';
        document.getElementById('errorSegundoApellido').className='invalid-feedback';
        document.getElementById('segundo_apellido').className='invalid';
        
    }else{
        if (!valores.nombre.exec(document.getElementById('segundo_apellido').value)){
            document.getElementById('errorSegundoApellido').textContent='Nombre inválido';
            document.getElementById('errorSegundoApellido').className='invalid-feedback';
            document.getElementById('segundo_apellido').className='invalid';
        }
        else{
            document.getElementById('errorSegundoApellido').textContent='Correcto';
            document.getElementById('errorSegundoApellido').className='back';
            document.getElementById('segundo_apellido').className='valid';
        }
    }

    if (document.getElementById('usuario').value === ''){
        document.getElementById('errorUsuario').textContent='Rellene el campo';
        document.getElementById('errorUsuario').className='invalid-feedback';
        document.getElementById('usuario').className='invalid';
        
    }else{
        if (!valores.usuario.exec(document.getElementById('usuario').value)){
            document.getElementById('errorUsuario').textContent='Nombre inválido';
            document.getElementById('errorUsuario').className='invalid-feedback';
            document.getElementById('usuario').className='invalid';
        }
        else{
            document.getElementById('errorUsuario').textContent='Correcto';
            document.getElementById('errorUsuario').className='back';
            document.getElementById('usuario').className='valid';
        }
    }
    
    if (document.getElementById('email').value === ''){
        document.getElementById('errorEmail').textContent='Rellene el campo';
        document.getElementById('errorEmail').className='invalid-feedback';
        document.getElementById('email').className='invalid';
        
    }else{
        if (!valores.email.exec(document.getElementById('email').value)){
            document.getElementById('errorEmail').textContent='Email inválido';
            document.getElementById('errorEmail').className='invalid-feedback';
            document.getElementById('email').className='invalid';
        }
        else{
            document.getElementById('errorEmail').textContent='Correcto';
            document.getElementById('errorEmail').className='back';
            document.getElementById('email').className='valid';
        }

    }


    if (document.getElementById('clave').value === ''){
        document.getElementById('errorClave').textContent='Rellene el campo';
        document.getElementById('errorClave').className='invalid-feedback';
        document.getElementById('clave').className='invalid';
        
    }else{
        if (document.getElementById('clave').value.length<4||document.getElementById('clave').value.length>8){
            document.getElementById('errorClave').textContent='La contraseña debe tener entre 4 y 8 carácteres';
            document.getElementById('errorClave').className='invalid-feedback';
            document.getElementById('clave').className='invalid';
        }else{
            document.getElementById('errorClave').textContent='Correcto';
            document.getElementById('errorClave').className='back';
            document.getElementById('clave').className='valid';
        }
    } 


    if (valores.nombre.exec(nombre.value)){
        if (valores.email.exec(email.value)){
            if (clave.value.length>=4&&clave.value.length<=8){
                if(valores.usuario.exec(usuario.value)){
                    if(valores.nombre.exec(primer_apellido.value)){
                        if(valores.nombre.exec(segundo_apellido.value)){
                            alert("Tus datos han sido registrados");
                            mostrarBoton();
                        }
                    }
                    
                }
                
            }
        }
    }
    
});
}
function mostrarBoton() {
    document.getElementById("btnTabla").style.display = "block";
}

function redireccionar() {
    window.location.href = "tabla.html";
}