function Login(){
  var eventos_ = function(){
    eventos_ = this.eventos();
  }

  this.eventos = function(){
    $(".boton_login").off();

    $(".boton_login").click(function(){
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
          if(data){
           $("redireccion").append("<a id='link_redireccion' href='modulo2.html' style='display:none;'></a>");
	          document.getElementById("link_redireccion").click();
            //windows.location='modulo2.html';
          }
          else{
            alert("Usuario inexistente");
          }
        });
      }
    });
  }
}
