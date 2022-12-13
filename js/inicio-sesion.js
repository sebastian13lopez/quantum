function login(){
    
    var usuario, contraseña;

    usuario    = document.getElementById("username").value;
    contraseña    = document.getElementById("password").value;

    if(usuario == "" || contraseña == ""){
        alert ("TODOS LOS CAMPOS SON OBLIGATORIOS");
    }
}