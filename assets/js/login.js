function login() {
    var username = $(".usuario_login").val();
    var pass = $(".password_user").val();
    if(username == "" || pass == ""){
      alert("El nombre de usuario y la contraseña son requeridos");
    }
    else{
      $.ajax({
        method : 'POST',
        async : true,
        url : 'login.php',
        data : {
          "username" : username,
          "password" : pass
        }
      }).done(function(data){
        data = JSON.parse(data);
        
        if(data == true){
          redirect('modulo2.html');
        }
        else{
          alert("Usuario inexistente");
        }
      });
    }
}

function redirect(path) {
  var parts = window.location.pathname.split('/');
  parts.shift();
  parts.pop();
  parts.push(path);
  window.location.href = window.location.origin + "/" + parts.join('/');
}