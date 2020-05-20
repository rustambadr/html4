<?php
  if( !count($_POST) )
    die('err');

  $emailTo = "dr.badridinoff@ya.ru";


  $response = "Имя: <b>".$_POST['name']."</b><br>";
  $response .= "Email: <b>".$_POST['email']."</b><br>";

  $subject = 'Заявка';
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=utf-8\r\n";

  mail($emailTo, $subject, $response, $headers);
?>
