<?php

// archivo php para verificar si existe el usuario en la base de datos

include 'connection.php';

    $usuario = $_POST["username"];
    $contrasena = sha1($_POST["password"]);
    $query = "SELECT * FROM `usuarios` WHERE username = '$usuario' AND user_password = '$contrasena'";
    $resultado = false;
    if ($res = mysqli_query($connection,$query)) {
      while($row=mysqli_fetch_row($res)){
        if(count($row) == 4){
          $resultado = true;
        }
      }
    }
    mysqli_free_result($res);
    echo json_encode($resultado);
    mysqli_close($connection);

?>
