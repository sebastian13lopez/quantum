function login(){
    
    var usuario, contraseña;

    usuario    = document.getElementById("username").value;
    contraseña    = document.getElementById("password").value;

    if(usuario == "" || contraseña == ""){
        Swal.fire(
            'ERROR',
            'LLene todos los campos',
            'error'
          
            )
    }
}

alert("pene");

function cargaP(){

    Swal.fire(
        '!Bienvenido a Quantum!',
        'Explora y diviértete  :)',
        'success'

    )
}